# Favicon Files - Permanent Setup

## STATUS:
✅ Favicon files have been copied from `dist/assets/favicon/` to `public/favicon/`

## LOCATION:
- **Source:** `public/favicon/` (permanent - part of source code)
- **Build Output:** `dist/assets/favicon/` (generated during build)

## FILES IN public/favicon/:
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `apple-touch-icon.png`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `favicon.ico`
- `site.webmanifest`

## HOW IT WORKS:
1. Favicon files are stored in `public/favicon/` (source)
2. During build (`npm run build`), Vite copies `public/` folder to `dist/`
3. Files end up in `dist/assets/favicon/` (build output)
4. Files are uploaded to server with the rest of `dist/` folder

## TO UPDATE FAVICONS:

### Option 1: Replace Individual Files
1. Replace files in `public/favicon/` with new versions
2. Rebuild: `npm run build`
3. Upload `dist/` folder to server

### Option 2: Generate New Favicons from Municipal Seal
1. Use a favicon generator (e.g., https://realfavicongenerator.net/)
2. Upload municipal seal image: `/images/47f5d21c-299d-4311-9f15-583dfc7476ee.png`
3. Generate all favicon sizes
4. Replace files in `public/favicon/`
5. Rebuild: `npm run build`
6. Upload to server

## CURRENT FAVICON CONFIGURATION:

**index.html uses:**
```html
<link rel="icon" href="/images/47f5d21c-299d-4311-9f15-583dfc7476ee.png" type="image/png">
<link rel="apple-touch-icon" href="/images/47f5d21c-299d-4311-9f15-583dfc7476ee.png">
```

**Note:** The files in `public/favicon/` may be from the old build. If you want to use the municipal seal for all favicon sizes, you'll need to generate new favicons from the municipal seal image.

## TO MAKE MUNICIPAL SEAL FAVICONS:

1. **Generate favicons** from municipal seal image using a favicon generator
2. **Replace files** in `public/favicon/` with generated files
3. **Update index.html** to reference favicon files if needed (optional)
4. **Rebuild:** `npm run build`
5. **Upload:** Upload `dist/` folder to server

## IMPORTANT:
- ✅ Files in `public/favicon/` are permanent (part of source code)
- ✅ They will be included in every build
- ✅ Upload entire `dist/` folder, including `dist/assets/favicon/`
- ⚠️ Current files may be old - consider regenerating from municipal seal
