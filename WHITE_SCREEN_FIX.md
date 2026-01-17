# White Screen Fix - Troubleshooting Guide

## Common Causes of White Screen

### 1. JavaScript Errors
- **Check browser console** (F12 → Console tab)
- Look for red error messages
- Common errors: missing imports, syntax errors, undefined variables

### 2. Missing Environment Variables
- Supabase connection requires:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_PUBLISHABLE_KEY`
- **Fix:** Create `.env` file in project root:
  ```
  VITE_SUPABASE_URL=https://coiyzrbwfexbgpndsfdq.supabase.co
  VITE_SUPABASE_PUBLISHABLE_KEY=your_key_here
  ```
- **Rebuild after adding:** `npm run build`

### 3. Missing Files in Deployment
- All files from `dist/` folder must be uploaded
- `.htaccess` must be in root directory
- `assets/` folder must be complete

### 4. Browser Cache
- **Clear cache:** Ctrl+Shift+Delete
- **Hard refresh:** Ctrl+F5
- **Incognito mode:** Test in private window

### 5. Build Errors
- Check if build completed successfully
- Look for errors in terminal output
- Fix any TypeScript/syntax errors

## Quick Fixes

### Rebuild the Project
```bash
npm run build
```

### Check for Syntax Errors
```bash
npm run lint
```

### Test Locally First
```bash
npm run dev
```
Then visit `http://localhost:5173` to verify it works

### Verify Deployment Files
After uploading to cPanel:
1. Check that `index.html` exists in root
2. Check that `assets/` folder exists
3. Check that `.htaccess` exists in root
4. Verify file permissions (644 for files, 755 for folders)

## Debugging Steps

1. **Open Browser Console (F12)**
   - Check for JavaScript errors
   - Check Network tab for failed file loads

2. **Check Network Requests**
   - Look for 404 errors (missing files)
   - Look for 500 errors (server issues)
   - Verify assets are loading (JS/CSS files)

3. **Check HTML Source**
   - Right-click → View Page Source
   - Verify `index.html` is loading
   - Check if script tags are present

4. **Check Server Logs**
   - In cPanel → Error Logs
   - Look for PHP/Apache errors

## Fixed Issues

✅ **Syntax Error in App.tsx** - Fixed incomplete Route tag
✅ **Error Handling** - Added validation for Supabase env variables
✅ **Root Element Check** - Added safety check in main.tsx

## If Still Not Working

1. Check browser console for specific error
2. Verify environment variables are set correctly
3. Rebuild and redeploy fresh files
4. Check cPanel error logs
5. Test in different browser/device
