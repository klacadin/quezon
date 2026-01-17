# White Screen - Immediate Diagnostic Steps

## STEP 1: Check Browser Console (F12)

**Open browser console:**
1. Press `F12` (or Right-click → Inspect)
2. Go to **Console** tab
3. Look for **RED error messages**
4. **Share the error message** you see

**Common errors:**
- `Failed to load resource: net::ERR_FILE_NOT_FOUND` → Missing files
- `Uncaught ReferenceError: ... is not defined` → JavaScript error
- `Invalid API key` → Supabase configuration
- `Cannot read property of undefined` → Runtime error

---

## STEP 2: Check Network Tab (F12)

1. Open **Network** tab (next to Console)
2. **Refresh the page** (F5)
3. Look for **RED entries** (failed requests)
4. Check for **404 errors**

**What to look for:**
- ❌ `index.html` → 404 = File not found
- ❌ `assets/index-xxx.js` → 404 = JavaScript file missing
- ❌ `assets/index-xxx.css` → 404 = CSS file missing
- ✅ All files → 200 = Files loading correctly

---

## STEP 3: View Page Source

**Right-click on page → "View Page Source"**

**Check the script tag:**
- ✅ **GOOD:** `<script type="module" src="/assets/index-xxx.js"></script>`
- ❌ **BAD:** `<script type="module" src="/src/main.tsx"></script>` → Wrong build!

---

## STEP 4: Are You Testing Locally or Production?

### If Testing Locally (`npm run dev`):
1. Check terminal for errors
2. Make sure dev server is running
3. Try: `npm run dev` again
4. Visit: `http://localhost:5173`

### If Testing Production (`quezonbukidnon.com`):
1. Check if files were uploaded correctly
2. Verify `assets/` folder exists on server
3. Check `.htaccess` is in root
4. See: `WHITE_SCREEN_PRODUCTION_FIX.md`

---

## QUICK FIXES:

### Fix 1: Clear Browser Cache
- **Windows:** `Ctrl + Shift + Delete`
- **Mac:** `Cmd + Shift + Delete`
- Or: **Hard refresh:** `Ctrl + Shift + R` (Windows) / `Cmd + Shift + R` (Mac)

### Fix 2: Test in Incognito/Private Window
- Rules out browser cache issues
- **Chrome:** `Ctrl + Shift + N`
- **Firefox:** `Ctrl + Shift + P`

### Fix 3: Rebuild (if testing production)
```bash
npm run build
# Then re-upload dist/ folder to FTP
```

### Fix 4: Check File Permissions (if on server)
- Files: `644`
- Folders: `755`
- `.htaccess`: `644`

---

## COMMON CAUSES:

1. **Missing `assets/` folder** (most common)
   - Fix: Upload entire `dist/` folder, not just `index.html`

2. **Wrong `index.html` uploaded**
   - Fix: Make sure it's from `dist/` folder, not source

3. **JavaScript errors**
   - Fix: Check browser console for specific error

4. **Missing `.htaccess`**
   - Fix: Upload `.htaccess` to root directory

5. **Browser cache**
   - Fix: Clear cache or use incognito mode

---

## NEXT STEPS:

**After checking console:**
1. Share the error message you see
2. Tell me if it's local or production
3. Share any 404 errors from Network tab

Then I can provide the exact fix!
