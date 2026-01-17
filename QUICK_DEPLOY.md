# Quick Deployment Guide

## Issue: DNS_PROBE_FINISHED_NXDOMAIN

The subdomain `staging.quezonbukidnon.com` doesn't exist yet. Choose one of these options:

## Option A: Create Subdomain in cPanel (Recommended)

### Quick Steps:
1. **cPanel → Domains → Subdomains**
2. **Create:**
   - Subdomain: `staging`
   - Document Root: `public_html/staging`
3. **Wait 15-30 min** for DNS
4. **Deploy:**
   ```powershell
   .\scripts\deploy.ps1 -Staging
   ```
5. **Upload** contents of `dist/` to `public_html/staging/`
6. **Access:** `https://staging.quezonbukidnon.com`

---

## Option B: Deploy to Subdirectory (No DNS Needed)

Use this if you can't create a subdomain yet:

1. **Build for subdirectory:**
   ```powershell
   .\scripts\deploy.ps1 -Subdirectory
   ```

2. **Upload** contents of `dist-staging/` to `public_html/staging/`

3. **Access:** `https://quezonbukidnon.com/staging/`

---

## Option C: Deploy to Main Domain (Temporary)

For immediate testing on the main site:

1. **Build:**
   ```powershell
   .\scripts\deploy.ps1
   ```

2. **Upload** contents of `dist/` to `public_html/`

3. **Access:** `https://quezonbukidnon.com`

⚠️ **Warning:** This will overwrite the main site. Only use if acceptable.

---

## Verify DNS (for Option A)

```powershell
nslookup staging.quezonbukidnon.com
```

If it returns an IP address, DNS is ready. If it says "Non-existent domain", wait longer or check cPanel.

---

## Need Help?

See `DNS_SETUP_GUIDE.md` for detailed DNS setup instructions.
