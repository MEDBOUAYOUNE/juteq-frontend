#!/bin/bash

# Enhanced Jotiq Website Deployment Script
# This script builds the Next.js website and uploads it to the FTP server
# Features: Configuration file, logging, error handling, backup support

set -e  # Exit on any error

# Script information
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCRIPT_NAME="$(basename "$0")"
LOG_FILE="$SCRIPT_DIR/deployment.log"
CONFIG_FILE="$SCRIPT_DIR/.deploy-config"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Logging function
log() {
    local message="$1"
    local timestamp="$(date '+%Y-%m-%d %H:%M:%S')"
    echo "[$timestamp] $message" >> "$LOG_FILE"
    echo -e "$message"
}

# Error handling function
handle_error() {
    local exit_code=$?
    log "${RED}✗ Error occurred in $SCRIPT_NAME (exit code: $exit_code)${NC}"
    log "${RED}Check the log file: $LOG_FILE${NC}"
    exit $exit_code
}

trap handle_error ERR

# Load configuration
load_config() {
    if [ ! -f "$CONFIG_FILE" ]; then
        log "${RED}✗ Configuration file not found: $CONFIG_FILE${NC}"
        log "${YELLOW}Creating default configuration file...${NC}"
        create_default_config
    fi
    
    log "${BLUE}Loading configuration from: $CONFIG_FILE${NC}"
    source "$CONFIG_FILE"
    
    # Set defaults if not specified
    PROJECT_NAME=${PROJECT_NAME:-"Website"}
    BUILD_COMMAND=${BUILD_COMMAND:-"build"}
    BUILD_DIR=${BUILD_DIR:-"out"}
    PASSIVE_MODE=${PASSIVE_MODE:-true}
    DELETE_REMOTE_FILES=${DELETE_REMOTE_FILES:-true}
    PARALLEL_UPLOADS=${PARALLEL_UPLOADS:-3}
    VERBOSE_OUTPUT=${VERBOSE_OUTPUT:-true}
    CREATE_BACKUP=${CREATE_BACKUP:-false}
    BACKUP_DIR=${BACKUP_DIR:-"backups"}
}

# Create default configuration
create_default_config() {
    cat > "$CONFIG_FILE" << 'EOF'
# Website Deployment Configuration
# Keep this file secure and don't commit it to version control

# FTP Server Configuration
FTP_HOST=your-ftp-server.com
FTP_PORT=21
FTP_USER=your-username
FTP_PASS=your-password

# Project Configuration
PROJECT_NAME=Website
BUILD_COMMAND=build
BUILD_DIR=out

# Deployment Options
PASSIVE_MODE=true
DELETE_REMOTE_FILES=true
PARALLEL_UPLOADS=3
VERBOSE_OUTPUT=true

# Backup Options (optional)
CREATE_BACKUP=false
BACKUP_DIR=backups
EOF
    log "${YELLOW}Please edit $CONFIG_FILE with your FTP credentials${NC}"
    exit 1
}

# Check prerequisites
check_prerequisites() {
    log "${BLUE}Checking prerequisites...${NC}"
    
    # Check for package manager
    PACKAGE_MANAGER=""
    if command -v pnpm &> /dev/null; then
        PACKAGE_MANAGER="pnpm"
    elif command -v npm &> /dev/null; then
        PACKAGE_MANAGER="npm"
    elif command -v yarn &> /dev/null; then
        PACKAGE_MANAGER="yarn"
    else
        log "${RED}✗ No package manager found (npm, yarn, or pnpm)${NC}"
        exit 1
    fi
    log "${GREEN}✓ Found package manager: $PACKAGE_MANAGER${NC}"
    
    # Check for FTP client
    FTP_CLIENT=""
    if command -v lftp &> /dev/null; then
        FTP_CLIENT="lftp"
    elif command -v ncftpput &> /dev/null; then
        FTP_CLIENT="ncftp"
    elif command -v ftp &> /dev/null; then
        FTP_CLIENT="ftp"
    else
        log "${RED}✗ No suitable FTP client found${NC}"
        log "${YELLOW}Please install one of: lftp (recommended), ncftp, or ftp${NC}"
        log "${YELLOW}macOS: brew install lftp${NC}"
        log "${YELLOW}Ubuntu/Debian: sudo apt-get install lftp${NC}"
        exit 1
    fi
    log "${GREEN}✓ Found FTP client: $FTP_CLIENT${NC}"
}

# Build the application
build_application() {
    log "${BLUE}Building $PROJECT_NAME...${NC}"
    
    # Clean previous build if it exists
    if [ -d "$BUILD_DIR" ]; then
        log "${YELLOW}Removing previous build...${NC}"
        rm -rf "$BUILD_DIR"
    fi
    
    # Build the application
    case $PACKAGE_MANAGER in
        "pnpm")
            pnpm run "$BUILD_COMMAND"
            ;;
        "npm")
            npm run "$BUILD_COMMAND"
            ;;
        "yarn")
            yarn "$BUILD_COMMAND"
            ;;
    esac
    
    log "${GREEN}✓ Build completed${NC}"
}

# Verify build output
verify_build() {
    log "${BLUE}Verifying build output...${NC}"
    
    if [ ! -d "$BUILD_DIR" ]; then
        log "${RED}✗ Build directory '$BUILD_DIR' not found${NC}"
        exit 1
    fi
    
    FILE_COUNT=$(find "$BUILD_DIR" -type f | wc -l | tr -d ' ')
    DIR_SIZE=$(du -sh "$BUILD_DIR" | cut -f1)
    
    if [ "$FILE_COUNT" -eq 0 ]; then
        log "${RED}✗ No files found in build directory${NC}"
        exit 1
    fi
    
    log "${GREEN}✓ Build verification passed${NC}"
    log "${CYAN}  • Files: $FILE_COUNT${NC}"
    log "${CYAN}  • Size: $DIR_SIZE${NC}"
}

# Create backup (optional)
create_backup() {
    if [ "$CREATE_BACKUP" = "true" ]; then
        log "${BLUE}Creating backup...${NC}"
        
        local backup_name="backup_$(date +%Y%m%d_%H%M%S)"
        local backup_path="$BACKUP_DIR/$backup_name"
        
        mkdir -p "$BACKUP_DIR"
        
        # Download current website (simplified - would need more complex implementation)
        log "${YELLOW}Backup creation not implemented in this version${NC}"
        log "${YELLOW}Skipping backup step...${NC}"
    fi
}

# Upload to FTP server
upload_to_ftp() {
    log "${BLUE}Uploading to FTP server...${NC}"
    log "${CYAN}Server: $FTP_HOST:$FTP_PORT${NC}"
    log "${CYAN}User: $FTP_USER${NC}"
    
    case $FTP_CLIENT in
        "lftp")
            upload_with_lftp
            ;;
        "ncftp")
            upload_with_ncftp
            ;;
        "ftp")
            upload_with_ftp
            ;;
    esac
    
    log "${GREEN}✓ Upload completed${NC}"
}

# Upload using lftp (recommended)
upload_with_lftp() {
    log "${YELLOW}Using lftp for upload...${NC}"
    
    local verbose_flag=""
    local delete_flag=""
    
    if [ "$VERBOSE_OUTPUT" = "true" ]; then
        verbose_flag="--verbose"
    fi
    
    if [ "$DELETE_REMOTE_FILES" = "true" ]; then
        delete_flag="--delete"
    fi
    
    lftp -c "
    set ftp:list-options -a;
    set ftp:passive-mode $PASSIVE_MODE;
    set net:max-retries 3;
    set net:timeout 30;
    open ftp://$FTP_USER:$FTP_PASS@$FTP_HOST:$FTP_PORT;
    lcd $BUILD_DIR;
    mirror --reverse $delete_flag $verbose_flag --parallel=$PARALLEL_UPLOADS . /;
    bye;
    "
}

# Upload using ncftp
upload_with_ncftp() {
    log "${YELLOW}Using ncftp for upload...${NC}"
    
    local verbose_flag=""
    if [ "$VERBOSE_OUTPUT" = "true" ]; then
        verbose_flag="-v"
    fi
    
    ncftpput -R $verbose_flag -u "$FTP_USER" -p "$FTP_PASS" -P "$FTP_PORT" "$FTP_HOST" / "$BUILD_DIR"/*
}

# Upload using basic ftp
upload_with_ftp() {
    log "${YELLOW}Warning: Using basic ftp client${NC}"
    log "${RED}For better performance and features, install 'lftp'${NC}"
    
    local ftp_batch="/tmp/ftp_batch_$$"
    cat > "$ftp_batch" << EOF
open $FTP_HOST $FTP_PORT
user $FTP_USER $FTP_PASS
passive
binary
lcd $BUILD_DIR
prompt off
mput *
quit
EOF
    
    ftp -n < "$ftp_batch"
    rm "$ftp_batch"
}

# Show deployment summary
show_summary() {
    local end_time=$(date)
    local duration=$(($(date +%s) - START_TIME))
    
    log "${GREEN}=== Deployment Completed Successfully! ===${NC}"
    log "${PURPLE}Deployment Summary:${NC}"
    log "${CYAN}  • Project: $PROJECT_NAME${NC}"
    log "${CYAN}  • Files uploaded: $FILE_COUNT${NC}"
    log "${CYAN}  • Total size: $DIR_SIZE${NC}"
    log "${CYAN}  • FTP Server: $FTP_HOST:$FTP_PORT${NC}"
    log "${CYAN}  • FTP Client: $FTP_CLIENT${NC}"
    log "${CYAN}  • Package Manager: $PACKAGE_MANAGER${NC}"
    log "${CYAN}  • Duration: ${duration}s${NC}"
    log "${CYAN}  • Completed: $end_time${NC}"
    log ""
    log "${YELLOW}Your website should now be live!${NC}"
    log "${BLUE}Log file: $LOG_FILE${NC}"
}

# Main execution
main() {
    START_TIME=$(date +%s)
    
    log "${PURPLE}=== Enhanced $PROJECT_NAME Deployment Script ===${NC}"
    log "${YELLOW}Starting deployment process...${NC}"
    log "${BLUE}Timestamp: $(date)${NC}"
    
    # Initialize log file
    echo "=== Deployment Log - $(date) ===" >> "$LOG_FILE"
    
    load_config
    check_prerequisites
    
    log "${BLUE}Step 1: Changing to project directory...${NC}"
    cd "$SCRIPT_DIR"
    log "${GREEN}✓ Working directory: $(pwd)${NC}"
    
    log "${BLUE}Step 2: Building application...${NC}"
    build_application
    
    log "${BLUE}Step 3: Verifying build...${NC}"
    verify_build
    
    log "${BLUE}Step 4: Creating backup...${NC}"
    create_backup
    
    log "${BLUE}Step 5: Uploading to server...${NC}"
    upload_to_ftp
    
    log "${BLUE}Step 6: Deployment summary...${NC}"
    show_summary
}

# Run main function
main "$@"
