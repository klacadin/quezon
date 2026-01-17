# Build Error Fix: Permission Denied on .htaccess

## ERROR:
```
EPERM, Permission denied: \\?\C:\Documents\gitrepo\dist\.htaccess
```

## ROOT CAUSE:
The `.htaccess` file in the `dist/` folder is locked by another process (File Explorer, VS Code, FTP client, etc.).

## FIX:

### Option 1: Close Locking Processes (Recommended)
1. **Close File Explorer** if it's viewing the `dist/` folder
2. **Close VS Code** if it has `dist/` folder open in the file tree
3. **Close FTP clients** (FileZilla, WinSCP, etc.)
4. **Close any text editors** that might have `.htaccess` open
5. **Rebuild:** `npm run build`

### Option 2: Manually Delete dist Folder
1. **Close all programs** that might access the `dist/` folder
2. **Delete the `dist/` folder** manually (right-click → Delete)
3. **Rebuild:** `npm run build`

### Option 3: Restart Computer (If above don't work)
If the file is still locked, restart your computer and then rebuild.

## PREVENTION:
- Always close File Explorer windows viewing `dist/` before building
- Don't leave FTP clients connected to the `dist/` folder
- Close VS Code file explorer on `dist/` folder before building

## NOTE:
The build process needs to delete the `dist/` folder before creating a new one. If any file is locked, the build will fail.
