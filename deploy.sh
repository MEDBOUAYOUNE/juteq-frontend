#!/bin/bash

# Jotiq Website Deployment Script
# This script builds the Next.js website and uploads it to the FTP server

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# FTP Configuration
FTP_HOST="136.144.188.96"
FTP_PORT="218999"
FTP_USER="jotiq.web"
FTP_PASS="Jotiq.Web"

# Directories
PROJECT_DIR="/Users/otman/projects/jotiq/website"
BUILD_DIR="$PROJECT_DIR/out"

echo -e "${BLUE}=== Jotiq Website Deployment Script ===${NC}"
echo -e "${YELLOW}Starting deployment process...${NC}"

# Step 1: Navigate to project directory
echo -e "${BLUE}Step 1: Navigating to project directory...${NC}"
cd "$PROJECT_DIR"
echo -e "${GREEN}✓ Changed to: $(pwd)${NC}"

# Step 2: Install/update dependencies (optional, uncomment if needed)
# echo -e "${BLUE}Step 2: Installing dependencies...${NC}"
# pnpm install
# echo -e "${GREEN}✓ Dependencies installed${NC}"

# Step 3: Build the Next.js application
echo -e "${BLUE}Step 3: Building Next.js application...${NC}"
if command -v pnpm &> /dev/null; then
    pnpm run build
elif command -v npm &> /dev/null; then
    npm run build
elif command -v yarn &> /dev/null; then
    yarn build
else
    echo -e "${RED}✗ No package manager found (npm, yarn, or pnpm)${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Build completed${NC}"

# Step 4: Verify build directory exists
echo -e "${BLUE}Step 4: Verifying build output...${NC}"
if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}✗ Build directory '$BUILD_DIR' not found${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Build directory found: $BUILD_DIR${NC}"

# Step 5: Display build statistics
echo -e "${BLUE}Step 5: Build statistics...${NC}"
FILE_COUNT=$(find "$BUILD_DIR" -type f | wc -l | tr -d ' ')
DIR_SIZE=$(du -sh "$BUILD_DIR" | cut -f1)
echo -e "${GREEN}✓ Total files: $FILE_COUNT${NC}"
echo -e "${GREEN}✓ Total size: $DIR_SIZE${NC}"

# Step 6: Upload to FTP server
echo -e "${BLUE}Step 6: Uploading to FTP server...${NC}"
echo -e "${YELLOW}Connecting to $FTP_HOST:$FTP_PORT...${NC}"

# Check if lftp is available (better FTP client)
if command -v lftp &> /dev/null; then
    echo -e "${YELLOW}Using lftp for upload...${NC}"
    lftp -c "
    set ftp:list-options -a;
    set ftp:passive-mode true;
    open ftp://$FTP_USER:$FTP_PASS@$FTP_HOST:$FTP_PORT;
    lcd $BUILD_DIR;
    mirror --reverse --delete --verbose --parallel=3 . /;
    bye;
    "
# Fallback to ncftp if available
elif command -v ncftpput &> /dev/null; then
    echo -e "${YELLOW}Using ncftp for upload...${NC}"
    ncftpput -R -v -u "$FTP_USER" -p "$FTP_PASS" -P "$FTP_PORT" "$FTP_HOST" / "$BUILD_DIR"/*
# Fallback to basic ftp (not recommended for automation)
elif command -v ftp &> /dev/null; then
    echo -e "${YELLOW}Warning: Using basic ftp client (limited functionality)${NC}"
    echo -e "${RED}For better performance, install 'lftp' or 'ncftp'${NC}"
    
    # Create FTP batch file
    FTP_BATCH="/tmp/ftp_batch_$$"
    cat > "$FTP_BATCH" << EOF
open $FTP_HOST $FTP_PORT
user $FTP_USER $FTP_PASS
passive
binary
lcd $BUILD_DIR
prompt off
mput *
quit
EOF
    
    ftp -n < "$FTP_BATCH"
    rm "$FTP_BATCH"
else
    echo -e "${RED}✗ No suitable FTP client found${NC}"
    echo -e "${YELLOW}Please install one of: lftp, ncftp, or ftp${NC}"
    echo -e "${YELLOW}Recommended: brew install lftp${NC}"
    exit 1
fi

# Step 7: Completion
echo -e "${GREEN}=== Deployment Completed Successfully! ===${NC}"
echo -e "${GREEN}✓ Website uploaded to: ftp://$FTP_HOST:$FTP_PORT${NC}"
echo -e "${BLUE}Deployment Summary:${NC}"
echo -e "  • Files uploaded: $FILE_COUNT"
echo -e "  • Total size: $DIR_SIZE"
echo -e "  • FTP Server: $FTP_HOST:$FTP_PORT"
echo -e "  • Timestamp: $(date)"
echo ""
echo -e "${YELLOW}Your website should now be live!${NC}"
