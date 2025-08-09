# 🚀 Quick Deployment Guide

## For Windows Web Server Deployment

### Option 1: Use the Batch File (Easiest)
1. Double-click `build-for-windows.bat`
2. Wait for the build to complete
3. Upload the contents of the `out` folder to your web server

### Option 2: Use PowerShell
1. Right-click `build-for-windows.ps1` → "Run with PowerShell"
2. Follow the prompts
3. Upload the contents of the `out` folder to your web server

### Option 3: Manual Build
```bash
npm install
npm run build
```

## 📁 What Gets Created

After building, you'll have an `out` folder containing:
- Static HTML files for all pages
- CSS and JavaScript bundles
- All images and assets
- Ready for any web server

## 📤 Upload to Server

1. **FTP Client**: Upload contents of `out` folder to your web root
2. **File Manager**: Use your hosting control panel's file manager
3. **Maintain Structure**: Keep all folders and files in the same structure

## ⚠️ Important Notes

- This is a **static export** - no server-side features
- Works on **any web server** (IIS, Apache, Nginx, etc.)
- All routing is **client-side**
- Images are **unoptimized** for static hosting

## 🔧 Troubleshooting

- **404 Errors**: Ensure `index.html` is served for all routes
- **Missing Assets**: Check that `_next` folder was uploaded completely
- **Broken Links**: Verify folder structure is maintained

## 📚 Full Documentation

See `DEPLOYMENT_GUIDE.md` for detailed instructions and `FTP_UPLOAD_CHECKLIST.md` for step-by-step upload process.

---

**Need Help?** Check the troubleshooting section in `DEPLOYMENT_GUIDE.md` or contact your hosting provider.
