# 🚀 Quick Deployment Guide

## Ready to Deploy!

Your deployment scripts are set up and ready to use. Here are the quickest ways to deploy:

### Method 1: Direct Script (Recommended for daily use)
```bash
./deploy-quick.sh
```

### Method 2: NPM/PNPM Script
```bash
npm run deploy
# or
pnpm run deploy
```

### Method 3: Other Scripts
```bash
./deploy.sh              # Standard with detailed output
./deploy-advanced.sh     # Full-featured with logging
```

## What Happens When You Deploy

1. ✅ **Build** - Builds your Next.js site (`pnpm/npm run build`)
2. ✅ **Upload** - Uploads all files from `out/` directory to FTP server
3. ✅ **Deploy** - Files are live on `136.144.188.96:218999`

## Files Created

- **Scripts:** `deploy-quick.sh`, `deploy.sh`, `deploy-advanced.sh`
- **Config:** `.deploy-config` (your FTP settings)
- **Docs:** `DEPLOYMENT.md`, `QUICK_START.md`
- **NPM Scripts:** Added to `package.json`

## Quick Test

Test your setup:
```bash
# Quick deploy (recommended)
./deploy-quick.sh
```

## Need Help?

- Check `DEPLOYMENT.md` for full documentation
- FTP settings are in `.deploy-config`
- Logs are saved to `deployment.log` (advanced script)

---
**Your Next.js website will be deployed to the FTP server automatically! 🌐**
