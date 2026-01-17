# Fix: Invalid API Key in Production

## PROBLEM:
Production site (quezonbukidnon.com) shows "invalid API key" when logging in, but localhost works.

## ROOT CAUSE:
Vite embeds environment variables at **build time**. If the build was done without the correct `.env` file, the production build will have missing/wrong API keys.

## FIX:

### Step 1: Verify .env File
Your `.env` file should contain:
```env
VITE_SUPABASE_URL=https://coiyzrbwfexbgpndsfdq.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvaXl6cmJ3ZmV4YmdwbmRzZmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4NDM0OTMsImV4cCI6MjA4MzQxOTQ5M30.poXi-64xE8ABq661iC7PJLwX62kp-wC61he1RFcQ_rE
VITE_SUPABASE_PROJECT_ID=coiyzrbwfexbgpndsfdq
```

### Step 2: Rebuild with Correct Environment Variables
```bash
# Make sure you're in the project root
cd C:\Documents\gitrepo

# Verify .env file exists and has correct values
# (Already verified - your .env is correct)

# Clean build (removes old dist folder)
npm run build
```

### Step 3: Verify Build Contains Correct Keys
After building, check that the built files contain the API key:
```bash
# Search for the API key in built files (should find it)
Select-String -Path "dist\assets\*.js" -Pattern "coiyzrbwfexbgpndsfdq" | Select-Object -First 1
```

### Step 4: Re-upload to Production
1. **Delete old files** from FTP server (or at least the `dist/assets/` folder)
2. **Upload entire `dist/` folder** contents to `public_html/` (or your domain root)
3. **Ensure `.htaccess` is in root** (same directory as `index.html`)

### Step 5: Clear Browser Cache
After uploading:
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Or clear browser cache completely
- Test login again

## VALIDATION:
1. Open browser console (F12)
2. Check for any errors related to Supabase
3. Try logging in - should work now
4. Verify you see "✅ Roles loaded" in console after login

## PREVENTION:
**Always rebuild after changing environment variables:**
- Update `.env` file
- Run `npm run build`
- Re-upload `dist/` folder

## TROUBLESHOOTING:

### Still getting "invalid API key"?
1. **Check browser console** - look for exact error message
2. **Verify build was done with .env file present** - the build must happen where .env exists
3. **Check if API key is in built files:**
   ```bash
   Select-String -Path "dist\assets\*.js" -Pattern "VITE_SUPABASE" -Context 2
   ```
4. **Verify Supabase project is correct:**
   - URL: `https://coiyzrbwfexbgpndsfdq.supabase.co`
   - Project ID: `coiyzrbwfexbgpndsfdq`

### API key not found in build?
- Make sure `.env` file is in project root (same directory as `package.json`)
- Make sure variable names start with `VITE_` (required for Vite)
- Rebuild: `npm run build`

## QUICK FIX COMMAND:
```powershell
# Run this in project root
npm run build
# Then upload dist/ folder contents to FTP
```
