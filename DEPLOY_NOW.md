# 🚀 Quick Deployment Instructions
## Ready to Deploy to cPanel

### ✅ What's Been Updated:
1. ✅ Favicon changed to municipal seal (`/images/47f5d21c-299d-4311-9f15-583dfc7476ee.png`)
2. ✅ All files ready for deployment
3. ✅ Comprehensive deployment guide created

---

## 📦 3-Step Deployment

### Step 1: Build
```bash
npm run build
```

### Step 2: Upload to FTP
Upload **ENTIRE** `dist/` folder contents to `public_html/` on your cPanel FTP server.

**Critical files:**
- `dist/index.html` → `public_html/index.html`
- `dist/.htaccess` → `public_html/.htaccess`
- `dist/assets/` folder → `public_html/assets/` (ENTIRE folder!)
- All other folders/files from `dist/`

### Step 3: Verify
- Visit: `https://quezonbukidnon.com/`
- Check browser console (F12) - no errors
- Test navigation and page refresh

---

## ✅ Pre-Deployment Checklist

- [x] Favicon updated to municipal seal
- [ ] Build completed (`npm run build`)
- [ ] All files uploaded to FTP
- [ ] `.htaccess` in root directory
- [ ] File permissions set (644 for files, 755 for folders)
- [ ] Website tested

---

## 📋 Full Guide

For detailed instructions, troubleshooting, and file structure details, see:
- **`CPANEL_DEPLOYMENT_GUIDE.md`** - Complete deployment guide
- **`WHITE_SCREEN_PRODUCTION_FIX.md`** - If you see white screen
- **`PRODUCTION_API_KEY_FIX.md`** - If API key errors occur

---

## 🔍 Quick Troubleshooting

**White screen?** → Check `WHITE_SCREEN_PRODUCTION_FIX.md`
**404 errors?** → Verify `.htaccess` is uploaded
**API key errors?** → Check `PRODUCTION_API_KEY_FIX.md`
**Images not loading?** → Verify `images/` folder uploaded

---

**You're ready to deploy! 🎉**
