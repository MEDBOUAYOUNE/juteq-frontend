#!/bin/bash

# Quick Jotiq Website Deployment Script with Retry Logic
# Simple script for daily deployments with robust FTP handling

set -e

# Configuration
PROJECT_DIR="/Users/otman/projects/jotiq/website"
FTP_HOST="136.144.188.96"
FTP_PORT="218999"
FTP_USER="jotiq.web"
FTP_PASS="Jotiq.Web"

# Load retry configuration if available
RETRY_CONFIG_FILE="$PROJECT_DIR/.deploy-retry-config"
if [ -f "$RETRY_CONFIG_FILE" ]; then
    source "$RETRY_CONFIG_FILE"
fi

# Default retry settings (used if config file not found)
MAX_RETRIES=${MAX_RETRIES:-3}
CONNECTION_TIMEOUT=${CONNECTION_TIMEOUT:-30}
COMMAND_TIMEOUT=${COMMAND_TIMEOUT:-300}  # 5 minutes for upload
RETRY_DELAY=${RETRY_DELAY:-5}
VERBOSE_MODE=${VERBOSE_MODE:-true}

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🚀 Quick Deploy - Jotiq Website${NC}"

# Navigate to project
cd "$PROJECT_DIR"
echo -e "${YELLOW}📁 Working in: $(pwd)${NC}"

# Build
echo -e "${YELLOW}🔨 Building...${NC}"
if command -v pnpm &> /dev/null; then
    pnpm run build
else
    npm run build
fi

# Upload function with retry logic
upload_with_retry() {
    local attempt=1
    local success=false
    
    while [ $attempt -le $MAX_RETRIES ] && [ "$success" = false ]; do
        echo -e "${YELLOW}📤 Uploading... (Attempt $attempt/$MAX_RETRIES)${NC}"
        
        if command -v lftp &> /dev/null; then
            # Use timeout command to limit connection time
            if timeout $COMMAND_TIMEOUT lftp -c "
                set net:timeout $CONNECTION_TIMEOUT;
                set net:max-retries 2;
                set net:reconnect-interval-multiplier 1;
                set ftp:passive-mode true;
                set ftp:ssl-allow no;
                set cmd:fail-exit true;
                open ftp://$FTP_USER:$FTP_PASS@$FTP_HOST:$FTP_PORT || exit 1;
                lcd out || exit 1;
                mirror --reverse --delete --verbose --parallel=2 . / || exit 1;
                bye;
            "; then
                success=true
                echo -e "${GREEN}✅ Upload successful!${NC}"
            else
                local exit_code=$?
                if [ $exit_code -eq 124 ]; then
                    echo -e "${RED}❌ Upload timed out after ${COMMAND_TIMEOUT}s${NC}"
                else
                    echo -e "${RED}❌ Upload failed with exit code: $exit_code${NC}"
                fi
                
                if [ $attempt -lt $MAX_RETRIES ]; then
                    echo -e "${YELLOW}⏳ Waiting ${RETRY_DELAY}s before retry...${NC}"
                    sleep $RETRY_DELAY
                fi
            fi
        else
            # Fallback to basic FTP with timeout
            echo -e "${YELLOW}⚠️  Using basic ftp (install lftp for better performance: brew install lftp)${NC}"
            
            cd out
            if timeout $COMMAND_TIMEOUT ftp -n << EOF
open $FTP_HOST $FTP_PORT
user $FTP_USER $FTP_PASS
passive
binary
prompt off
mput *
quit
EOF
            then
                success=true
                echo -e "${GREEN}✅ Upload successful!${NC}"
                cd ..
            else
                echo -e "${RED}❌ FTP upload failed${NC}"
                cd ..
                
                if [ $attempt -lt $MAX_RETRIES ]; then
                    echo -e "${YELLOW}⏳ Waiting ${RETRY_DELAY}s before retry...${NC}"
                    sleep $RETRY_DELAY
                fi
            fi
        fi
        
        attempt=$((attempt + 1))
    done
    
    if [ "$success" = false ]; then
        echo -e "${RED}💥 All upload attempts failed after $MAX_RETRIES tries${NC}"
        echo -e "${RED}❌ Deployment failed!${NC}"
        exit 1
    fi
}

# Test FTP connection first
test_ftp_connection() {
    echo -e "${YELLOW}🔍 Testing FTP connection...${NC}"
    
    if command -v lftp &> /dev/null; then
        if timeout $CONNECTION_TIMEOUT lftp -c "
            set net:timeout 10;
            set ftp:passive-mode true;
            open ftp://$FTP_USER:$FTP_PASS@$FTP_HOST:$FTP_PORT;
            pwd;
            bye;
        " > /dev/null 2>&1; then
            echo -e "${GREEN}✅ FTP connection test successful${NC}"
            return 0
        else
            echo -e "${RED}❌ FTP connection test failed${NC}"
            return 1
        fi
    else
        # Skip connection test for basic ftp
        echo -e "${YELLOW}⚠️  Skipping connection test (lftp not available)${NC}"
        return 0
    fi
}

# Test connection before uploading
if ! test_ftp_connection; then
    echo -e "${RED}❌ Cannot connect to FTP server. Please check your credentials and network.${NC}"
    exit 1
fi

# Run upload with retry logic
upload_with_retry

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${GREEN}🌐 Your website is now live!${NC}"
