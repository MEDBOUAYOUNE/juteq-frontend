# JOTIQ Website Deployment Guide for Windows Web Server

## Prerequisites
- Node.js 18+ installed on your local machine
- FTP access to your Windows web server
- Your website files ready for deployment

## Step 1: Build the Project Locally

On your local machine (where you have Node.js installed), run these commands:

```bash
# Navigate to the website directory
cd website

# Install dependencies
npm install
# OR if you prefer pnpm
pnpm install

# Build the project for production
npm run build
# OR
pnpm build
```

This will create a `out` folder with all the static files needed for deployment.

## Step 2: Prepare Files for FTP Upload

After building, you'll have a `out` folder containing:
- `index.html` (your homepage)
- `integrations/` folder
- `pricing/` folder
- `contact/` folder
- `legal/` folder
- `resources/` folder
- `solutions/` folder
- `_next/` folder (Next.js assets)
- All your images and static assets

## Step 3: Upload to Windows Web Server

### Option A: Upload via FTP Client
1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your server using your FTP credentials
3. Navigate to your web root directory (usually `www` or `public_html`)
4. Upload the entire contents of the `out` folder to your web root

### Option B: Upload via File Manager
1. Access your hosting control panel
2. Use the File Manager to upload files
3. Upload the contents of the `out` folder to your web root

## Step 4: Configure Web Server

### For IIS (Internet Information Services):
1. Ensure your web root points to the directory where you uploaded the files
2. Make sure the `web.config` file is present (Next.js should create this automatically)
3. Set up proper MIME types for `.js`, `.css`, and other assets

### For Apache:
1. Ensure `.htaccess` file is present (Next.js should create this automatically)
2. Make sure mod_rewrite is enabled

## Step 5: Test Your Website

1. Visit your domain in a web browser
2. Test all pages and functionality
3. Check that images and assets load correctly
4. Verify that all links work properly

## Important Notes

- **Static Export**: This website is configured for static export (`output: 'export'` in next.config.js)
- **No Server-Side Features**: Since this is a static export, server-side features won't work
- **Image Optimization**: Images are set to `unoptimized: true` for static hosting
- **Routing**: All routing is handled client-side

## Troubleshooting

### Common Issues:
1. **404 Errors**: Make sure your web server is configured to serve `index.html` for all routes
2. **Missing Assets**: Verify all files from the `out` folder were uploaded
3. **Broken Links**: Check that the `_next` folder was uploaded completely

### For IIS:
- Ensure the `web.config` file is present and properly configured
- Check that the Default Document is set to `index.html`

### For Apache:
- Ensure `.htaccess` file is present
- Check that mod_rewrite is enabled

## File Structure After Upload

Your web root should look like this:
```
web_root/
├── index.html
├── integrations/
├── pricing/
├── contact/
├── legal/
├── resources/
├── solutions/
├── _next/
├── public/
└── [other assets]
```

## Support

If you encounter any issues during deployment, check:
1. Your web server error logs
2. Browser developer console for JavaScript errors
3. Network tab for failed asset requests
4. Your hosting provider's documentation for specific server configurations
