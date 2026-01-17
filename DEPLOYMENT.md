# Deployment Guide for cPanel - staging.quezonbukidnon.com

## Prerequisites

1. Access to cPanel for `staging.quezonbukidnon.com`
2. Node.js 18+ installed (for building)
3. FTP/cPanel File Manager access

## Step 1: Build the Application

```bash
# Install dependencies (if not already done)
npm install

# Build for production
npm run build
```

This will create a `dist/` folder with all optimized production files.

## Step 2: Prepare Files for Upload

The build creates:
- `dist/index.html` - Main HTML file
- `dist/assets/` - CSS, JS, and other assets
- `dist/` - All static files

**Important files to upload:**
- All contents of the `dist/` folder
- All contents of the `public/` folder (if not already in dist)
- `.htaccess` file from `public/.htaccess`

## Step 3: Upload to cPanel

### Option A: Using cPanel File Manager

1. Log in to cPanel
2. Navigate to **File Manager**
3. Go to `public_html/` (or your subdomain directory)
4. Upload all files from `dist/` folder:
   - Select all files in `dist/`
   - Upload to `public_html/`
5. Upload `.htaccess` file from `public/.htaccess` to root
6. Ensure `.htaccess` is in the same directory as `index.html`

### Option B: Using FTP

1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your server
3. Navigate to `public_html/` directory
4. Upload all contents of `dist/` folder
5. Upload `.htaccess` file to root

## Step 4: Set File Permissions

In cPanel File Manager:
- Set `index.html` to `644`
- Set `.htaccess` to `644`
- Set all directories to `755`
- Set all files to `644`

## Step 5: Environment Variables

### For Supabase Connection

If you need to update environment variables, create `.env.production` file:

```env
VITE_SUPABASE_URL=https://coiyzrbwfexbgpndsfdq.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key_here
```

**Note:** Since this is a Vite app, environment variables are embedded at build time. You'll need to rebuild if you change them.

### Update Supabase URL in Code (if needed)

Check and update:
- `src/integrations/supabase/client.ts`
- Any hardcoded URLs

## Step 6: Verify Deployment

1. Visit `https://staging.quezonbukidnon.com`
2. Check that:
   - Homepage loads correctly
   - Navigation works
   - All routes work (React Router)
   - Images load properly
   - API calls to Supabase work

## Step 7: SSL Certificate (if needed)

If SSL is not enabled:
1. Go to cPanel → SSL/TLS
2. Install Let's Encrypt certificate
3. Force HTTPS redirect in `.htaccess`:

```apache
# Add to .htaccess
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Troubleshooting

### Issue: 404 errors on page refresh
**Solution:** Ensure `.htaccess` is uploaded and mod_rewrite is enabled

### Issue: Assets not loading
**Solution:** 
- Check file paths are correct
- Verify all files in `dist/assets/` are uploaded
- Check browser console for 404 errors

### Issue: API calls failing
**Solution:**
- Check CORS settings in Supabase
- Verify environment variables are correct
- Check browser console for errors

### Issue: Slow loading
**Solution:**
- Ensure GZIP compression is enabled (included in .htaccess)
- Check browser Network tab for slow resources
- Verify CDN is set up (if applicable)

## Directory Structure After Deployment

```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [images and other assets]
└── uploads/
    └── [uploaded images]
```

## Updating the Site

1. Make changes locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. Upload new `dist/` contents
5. Clear browser cache if needed

## Database Setup

Ensure Supabase is configured:
- Database migrations are applied
- Storage buckets are created
- RLS policies are set up
- Environment variables match production

## Notes

- The `.htaccess` file handles React Router routing
- Static assets are optimized and minified
- Build output is production-ready
- No server-side rendering needed (pure SPA)

## Support

If you encounter issues:
1. Check cPanel error logs
2. Check browser console for errors
3. Verify all files are uploaded correctly
4. Test with a fresh browser cache
