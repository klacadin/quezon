# ✅ cPanel Deployment - Ready to Deploy

## Quick Start

### 1. Build the Project
```bash
npm run build
```

### 2. Files Ready for Upload
After building, upload these to cPanel:

**Location:** `dist/` folder contains everything you need:
- ✅ `dist/index.html` → Upload to root
- ✅ `dist/assets/` → Upload entire folder
- ✅ `dist/.htaccess` → Upload to root (auto-copied from public/)
- ✅ All other files in `dist/` → Upload to root

### 3. Upload to cPanel

**Using cPanel File Manager:**
1. Log in to cPanel
2. Open **File Manager**
3. Navigate to `public_html/` (or subdomain directory like `public_html/staging/`)
4. Upload **ALL contents** from `dist/` folder
5. Ensure `.htaccess` is in the root directory (same as `index.html`)
6. Set permissions:
   - Files: `644`
   - Folders: `755`

**Using PowerShell Script:**
```powershell
.\scripts\deploy.ps1 -Staging
```
This will build and prepare files, then show upload instructions.

### 4. Verify Deployment

Test these:
- ✅ Homepage loads: `https://staging.quezonbukidnon.com`
- ✅ Navigation works: Click all menu items
- ✅ React Router works: Refresh any page (no 404 errors)
- ✅ Images load: Check all images display
- ✅ Supabase works: Test login/admin features

## Environment Variables

**Current Supabase Configuration:**
- URL: `https://coiyzrbwfexbgpndsfdq.supabase.co`
- Key: Set in `.env` file as `VITE_SUPABASE_PUBLISHABLE_KEY`

**Note:** Environment variables are embedded at build time. If you need to change them:
1. Update `.env` file
2. Rebuild: `npm run build`
3. Re-upload `dist/` folder

## File Structure After Deployment

```
public_html/ (or public_html/staging/)
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [images and other assets]
├── forms/
│   └── [PDF files]
├── documents/
│   └── [PDF files]
└── uploads/
    └── [images]
```

## Important Notes

1. **`.htaccess` is required** - Without it, React Router won't work (404 errors on refresh)
2. **All files from `dist/`** - Upload everything, not just `index.html`
3. **File permissions** - Set correctly (644 for files, 755 for folders)
4. **SSL Certificate** - Install if not already done (cPanel → SSL/TLS)

## Troubleshooting

### White Screen / 404 Errors
- ✅ Check `.htaccess` is uploaded
- ✅ Verify `mod_rewrite` is enabled in cPanel
- ✅ Check file permissions

### Assets Not Loading
- ✅ Verify `dist/assets/` folder is fully uploaded
- ✅ Check browser console for 404 errors
- ✅ Clear browser cache

### Supabase Connection Issues
- ✅ Check environment variables are set correctly
- ✅ Verify Supabase CORS settings
- ✅ Check browser console for errors

## Deployment Checklist

- [ ] Build completed successfully (`npm run build`)
- [ ] All files from `dist/` uploaded to cPanel
- [ ] `.htaccess` file uploaded to root
- [ ] File permissions set (644/755)
- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] React Router works (no 404 on refresh)
- [ ] Images load properly
- [ ] Supabase connection works
- [ ] SSL certificate installed (if needed)

## Support Files

- `DEPLOYMENT.md` - Complete deployment guide
- `DEPLOYMENT_CHECKLIST.md` - Step-by-step checklist
- `QUICK_DEPLOY.md` - Quick reference
- `DNS_SETUP_GUIDE.md` - DNS configuration help
- `scripts/deploy.ps1` - Automated deployment script

---

**Ready to deploy!** 🚀
