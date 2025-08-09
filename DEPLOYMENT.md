# Jotiq Website Deployment Scripts

This project includes multiple deployment scripts to upload your Next.js website to your FTP server.

## Scripts Overview

### 1. `deploy-quick.sh` - Quick Daily Deployments
**Best for: Daily updates and quick deployments**

Simple, fast script that builds and deploys in one command.

```bash
./deploy-quick.sh
```

### 2. `deploy.sh` - Standard Deployment
**Best for: Regular deployments with detailed output**

Feature-rich script with colored output, error handling, and deployment statistics.

```bash
./deploy.sh
```

### 3. `deploy-advanced.sh` - Advanced Deployment
**Best for: Production deployments with logging and configuration**

Uses configuration file, creates logs, and provides comprehensive error handling.

```bash
./deploy-advanced.sh
```

## FTP Server Configuration

- **Host:** 136.144.188.96
- **Port:** 218999
- **Username:** jotiq.web
- **Password:** Jotiq.Web
- **Mode:** Passive

## Prerequisites

### Required
- Node.js and npm/pnpm/yarn
- Next.js project with `output: 'export'` configuration

### FTP Client (one of the following)
- **lftp** (recommended): `brew install lftp`
- **ncftp**: `brew install ncftp`
- **ftp** (basic, built-in)

## Quick Start

1. **Install an FTP client (recommended)**:
   ```bash
   brew install lftp
   ```

2. **Make scripts executable** (already done):
   ```bash
   chmod +x deploy-quick.sh
   chmod +x deploy.sh
   chmod +x deploy-advanced.sh
   ```

3. **Run deployment**:
   ```bash
   # For quick daily deployments
   ./deploy-quick.sh
   
   # For standard deployments
   ./deploy.sh
   
   # For advanced deployments with logging
   ./deploy-advanced.sh
   ```

## Build Process

All scripts automatically:
1. Navigate to the project directory
2. Build the Next.js application (`npm run build` or `pnpm run build`)
3. Upload the `out` directory to the FTP server
4. Display deployment status

## Features Comparison

| Feature | Quick | Standard | Advanced |
|---------|-------|----------|----------|
| Build & Deploy | ✅ | ✅ | ✅ |
| Colored Output | ✅ | ✅ | ✅ |
| Error Handling | Basic | Good | Comprehensive |
| Deployment Stats | ❌ | ✅ | ✅ |
| Logging | ❌ | ❌ | ✅ |
| Configuration File | ❌ | ❌ | ✅ |
| Multiple FTP Clients | ✅ | ✅ | ✅ |
| Backup Support | ❌ | ❌ | Planned |

## Troubleshooting

### Common Issues

**1. "No package manager found"**
- Install Node.js and npm/pnpm
- Ensure you're in the correct project directory

**2. "No suitable FTP client found"**
- Install lftp: `brew install lftp`
- Or install ncftp: `brew install ncftp`

**3. "Build directory not found"**
- Ensure your Next.js project is configured for static export
- Check that `next.config.js` has `output: 'export'`

**4. "FTP connection failed"**
- Verify FTP credentials are correct
- Check if the FTP server is accessible
- Ensure passive mode is supported

### Manual FTP Test
Test your FTP connection manually:
```bash
lftp ftp://jotiq.web:Jotiq.Web@136.144.188.96:218999
```

## Security Notes

- Keep FTP credentials secure
- Consider using environment variables for sensitive data
- Don't commit credentials to version control
- Use the configuration file (.deploy-config) for the advanced script

## Workflow Integration

### Option 1: Alias (Recommended)
Add to your `.zshrc` or `.bashrc`:
```bash
alias deploy="cd /Users/otman/projects/jotiq/website && ./deploy-quick.sh"
```

Then deploy from anywhere with:
```bash
deploy
```

### Option 2: VS Code Task
Add to `.vscode/tasks.json`:
```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Deploy Website",
            "type": "shell",
            "command": "./deploy-quick.sh",
            "group": "build",
            "presentation": {
                "echo": true,
                "reveal": "always",
                "focus": false,
                "panel": "shared"
            }
        }
    ]
}
```

### Option 3: Package.json Script
Add to your `package.json`:
```json
{
  "scripts": {
    "deploy": "./deploy-quick.sh",
    "deploy:advanced": "./deploy-advanced.sh"
  }
}
```

Then run:
```bash
npm run deploy
```

## Files Created

- `deploy-quick.sh` - Quick deployment script
- `deploy.sh` - Standard deployment script  
- `deploy-advanced.sh` - Advanced deployment script
- `.deploy-config` - Configuration file (for advanced script)
- `deployment.log` - Log file (created by advanced script)
- `DEPLOYMENT.md` - This documentation

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify your FTP credentials
3. Ensure lftp is installed for best performance
4. Check the deployment.log (if using advanced script)

---

**Happy Deploying! 🚀**
