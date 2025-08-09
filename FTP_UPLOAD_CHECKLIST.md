# FTP Upload Checklist for Windows Web Server

## Before Upload
- [ ] Project has been built successfully (`npm run build` completed)
- [ ] `out` folder contains all necessary files
- [ ] You have your FTP server credentials ready
- [ ] You know your web root directory path

## Files to Upload (from the `out` folder)
- [ ] `index.html` (homepage)
- [ ] `integrations/` folder and contents
- [ ] `pricing/` folder and contents
- [ ] `contact/` folder and contents
- [ ] `legal/` folder and contents
- [ ] `resources/` folder and contents
- [ ] `solutions/` folder and contents
- [ ] `_next/` folder and contents (Next.js assets)
- [ ] All image files and static assets

## FTP Upload Steps
1. **Connect to FTP Server**
   - Host: [Your server IP/domain]
   - Username: [Your FTP username]
   - Password: [Your FTP password]
   - Port: 21 (usually)

2. **Navigate to Web Root**
   - Find your web root directory (usually `www`, `public_html`, or `htdocs`)
   - This is where your website files should be uploaded

3. **Upload Files**
   - Upload the **contents** of the `out` folder (not the folder itself)
   - Ensure all subdirectories are created
   - Maintain the exact folder structure

4. **Verify Upload**
   - Check that all files uploaded successfully
   - Verify file sizes match your local files
   - Ensure no files are corrupted

## Post-Upload Checklist
- [ ] All files uploaded successfully
- [ ] Folder structure maintained
- [ ] Website accessible via browser
- [ ] All pages load correctly
- [ ] Images and assets display properly
- [ ] All links work correctly
- [ ] No 404 errors on internal pages

## Common Issues & Solutions

### 404 Errors on Internal Pages
- **Cause**: Web server not configured for client-side routing
- **Solution**: Ensure `index.html` is served for all routes

### Missing Images/Assets
- **Cause**: Files not uploaded or wrong path
- **Solution**: Check file paths and re-upload missing files

### Broken Links
- **Cause**: Incorrect folder structure
- **Solution**: Verify all folders were created correctly

### CSS/JS Not Loading
- **Cause**: `_next` folder incomplete
- **Solution**: Re-upload the entire `_next` folder

## Server Configuration Requirements

### For IIS (Internet Information Services)
- Default Document: `index.html`
- MIME Types: `.js`, `.css`, `.svg`, `.woff`, `.woff2`
- URL Rewrite Module (if needed)

### For Apache
- `.htaccess` file present
- `mod_rewrite` enabled
- Proper file permissions (644 for files, 755 for folders)

## Testing Your Website
1. **Homepage**: Visit your domain root
2. **Internal Pages**: Test navigation between pages
3. **Images**: Verify all images load correctly
4. **Responsiveness**: Test on mobile and desktop
5. **Links**: Check all internal and external links
6. **Forms**: Test contact forms (if any)

## Support
If you encounter issues:
1. Check your web server error logs
2. Verify file permissions
3. Test with a simple HTML file first
4. Contact your hosting provider for server-specific issues
