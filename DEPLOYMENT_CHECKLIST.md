# cPanel Deployment Checklist - staging.quezonbukidnon.com

## Pre-Deployment Checklist

- [x] Hotline removed from header
- [x] Logo warping fixed on mobile
- [x] Build successful (no errors)
- [x] .htaccess file created for React Router
- [x] Vite config optimized for production
- [ ] Environment variables verified
- [ ] Supabase connection tested
- [ ] All assets verified

## Quick Deployment Steps

### 1. Build the Project
```bash
npm run build
```

### 2. Files to Upload to cPanel

**Required files:**
- ✅ `dist/index.html` → `public_html/index.html`
- ✅ `dist/assets/*` → `public_html/assets/*`
- ✅ `public/.htaccess` → `public_html/.htaccess`
- ✅ `public/uploads/*` → `public_html/uploads/*` (if not in dist)

**Verify these exist in dist after build:**
- `dist/index.html`
- `dist/assets/` (folder with JS, CSS, images)
- All image assets

### 3. Upload Process

**Using cPanel File Manager:**
1. Log in to cPanel
2. Open **File Manager**
3. Navigate to `public_html/` (or subdomain directory)
4. Delete old files (optional, backup first)
5. Upload all contents of `dist/` folder
6. Upload `.htaccess` from `public/.htaccess`
7. Set permissions:
   - Files: `644`
   - Folders: `755`

**Using FTP:**
1. Connect via FTP client
2. Navigate to `public_html/`
3. Upload all files from `dist/`
4. Upload `.htaccess`

### 4. Verify Deployment

Test these URLs:
- [ ] `https://staging.quezonbukidnon.com` - Homepage loads
- [ ] `https://staging.quezonbukidnon.com/about` - Navigation works
- [ ] `https://staging.quezonbukidnon.com/governance` - All routes work
- [ ] Refresh page - No 404 errors (React Router)
- [ ] Logo displays correctly on mobile
- [ ] Images load properly
- [ ] Supabase connections work
- [ ] Admin login works

### 5. Post-Deployment

- [ ] Clear browser cache
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Check SSL certificate (if needed)
- [ ] Verify environment variables in Supabase

## Environment Variables

Ensure these are set in your build (check `.env` file):
```
VITE_SUPABASE_URL=https://coiyzrbwfexbgpndsfdq.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key_here
```

**Note:** Rebuild after changing environment variables.

## Troubleshooting

### Issue: White screen or 404 errors
**Fix:** Ensure `.htaccess` is uploaded and mod_rewrite is enabled

### Issue: Assets 404 errors
**Fix:** Check that `dist/assets/` folder is fully uploaded

### Issue: Logo warping on mobile
**Fix:** Already fixed - verify by checking mobile view

### Issue: API calls fail
**Fix:** Check Supabase CORS settings and environment variables

## Files Modified for Deployment

1. ✅ `src/components/Header.tsx` - Removed hotline, fixed logo
2. ✅ `vite.config.ts` - Optimized build config
3. ✅ `public/.htaccess` - Created for cPanel
4. ✅ `DEPLOYMENT.md` - Complete deployment guide

## Build Output Location

After running `npm run build`, find files in:
- `dist/` folder (upload entire contents)

## Next Steps After Deployment

1. Monitor error logs in cPanel
2. Test all functionality
3. Update DNS if needed for production domain
4. Set up SSL certificate if not already done
5. Configure CDN (optional, for better performance)
