# Fix: White Screen on Production (quezonbukidnon.com)

## PROBLEM:
Production site shows white screen - nothing loads.

## ROOT CAUSE:
Most likely one of these issues:
1. **Wrong index.html uploaded** - Development version instead of built version
2. **Missing assets** - JavaScript/CSS files not uploaded or wrong paths
3. **Missing .htaccess** - React Router not working
4. **JavaScript errors** - Supabase config or other runtime errors

## FIX:

### Step 1: Verify Build Output
The built `index.html` should reference `/assets/` files, NOT `/src/main.tsx`:

**WRONG (development):**
```html
<script type="module" src="/src/main.tsx"></script>
```

**CORRECT (production):**
```html
<script type="module" src="/assets/index-[hash].js"></script>
<link rel="stylesheet" href="/assets/index-[hash].css">
```

### Step 2: Rebuild Properly
```bash
# Clean build
npm run build

# Verify dist/index.html has correct script tags
# Should see /assets/ references, NOT /src/
```

### Step 3: Check Built Files
After building, verify these files exist in `dist/`:
- ✅ `dist/index.html` (with `/assets/` script tags)
- ✅ `dist/assets/` folder (with .js and .css files)
- ✅ `dist/.htaccess` (copied from public/)

### Step 4: Upload Correctly
**CRITICAL:** Upload the BUILT files, not source files:

1. **Delete everything** in `public_html/` on FTP (or at least old files)
2. **Upload entire `dist/` folder contents** to `public_html/`
3. **Verify structure:**
   ```
   public_html/
   ├── index.html          ← Built version (has /assets/ references)
   ├── .htaccess          ← Must be in root
   ├── assets/
   │   ├── index-[hash].js
   │   ├── index-[hash].css
   │   └── [other assets]
   └── [other folders]
   ```

### Step 5: Verify .htaccess
The `.htaccess` file MUST be in the root directory (same as `index.html`).

Check that it contains:
```apache
RewriteEngine On
RewriteBase /
RewriteRule . /index.html [L]
```

### Step 6: Check Browser Console
Open browser console (F12) and check for:
- **404 errors** → Missing files (re-upload assets)
- **CORS errors** → Supabase configuration issue
- **JavaScript errors** → Check error messages

## QUICK DIAGNOSTIC:

### Check 1: View Page Source
Right-click on quezonbukidnon.com → "View Page Source"

**If you see:**
```html
<script type="module" src="/src/main.tsx"></script>
```
→ **WRONG!** This is the dev version. Rebuild and re-upload.

**If you see:**
```html
<script type="module" src="/assets/index-abc123.js"></script>
```
→ **CORRECT!** But check if the file exists (404 = missing file).

### Check 2: Network Tab
Open F12 → Network tab → Refresh page

**Look for:**
- ❌ Red 404 errors → Files missing (re-upload)
- ❌ Red 500 errors → Server issue (check cPanel logs)
- ✅ Green 200 responses → Files loading correctly

### Check 3: Console Errors
Open F12 → Console tab

**Common errors:**
- `Failed to load resource` → Missing file
- `Invalid API key` → Supabase config (see PRODUCTION_API_KEY_FIX.md)
- `Cannot read property of undefined` → JavaScript error

## COMPLETE REBUILD & DEPLOY:

```bash
# 1. Clean build
npm run build

# 2. Verify dist/index.html has /assets/ references
# (NOT /src/main.tsx)

# 3. Upload entire dist/ folder to FTP
# 4. Ensure .htaccess is in root
# 5. Clear browser cache (Ctrl+Shift+R)
# 6. Test site
```

## CRITICAL: Upload ALL Files

When uploading to FTP, you MUST upload:
- ✅ `dist/index.html` → `public_html/index.html`
- ✅ `dist/assets/` folder (ENTIRE folder with all files) → `public_html/assets/`
- ✅ `dist/.htaccess` → `public_html/.htaccess`
- ✅ All other folders/files from `dist/` → `public_html/`

**Common mistake:** Only uploading `index.html` without the `assets/` folder = white screen!

## VALIDATION:
After fix, you should see:
- ✅ Page loads (not white screen)
- ✅ No 404 errors in Network tab
- ✅ No JavaScript errors in Console
- ✅ React app renders correctly

## IF STILL WHITE SCREEN:

1. **Check cPanel Error Logs**
   - cPanel → Metrics → Errors
   - Look for PHP/Apache errors

2. **Test in Incognito Mode**
   - Rules out browser cache issues

3. **Verify File Permissions**
   - Files: 644
   - Folders: 755
   - .htaccess: 644

4. **Check mod_rewrite is Enabled**
   - cPanel → Apache Modules
   - Ensure mod_rewrite is enabled

5. **Verify Domain Points to Correct Directory**
   - cPanel → Domains
   - Ensure quezonbukidnon.com points to correct public_html

## PREVENTION:
- **Always build before deploying:** `npm run build`
- **Always upload from `dist/` folder**, never from `src/` or root
- **Verify built index.html** has `/assets/` references before uploading
- **Test locally first:** `npm run preview` to test production build
