# Facebook Post Scraper Implementation

## Overview
This implementation fetches Facebook posts from the [Municipality of Quezon, Bukidnon Facebook page](https://www.facebook.com/MunicipalityOfQuezonBukidnon) using web scraping techniques.

## ⚠️ Important Notes

**Facebook Scraping Limitations:**
- Facebook requires login for most content, making direct scraping difficult
- Facebook actively blocks automated scraping and may violate their Terms of Service
- Content is dynamically loaded with JavaScript, requiring browser automation
- Rate limiting and bot detection make this approach unreliable

**Recommended Alternatives:**
1. **Facebook Graph API** (Official, requires app setup)
2. **Manual Content Management** (Admin updates posts in database)
3. **RSS Feeds** (If Facebook provides them)

## Setup Instructions

### Option 1: Use Backend Server (Recommended for Production)

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   # or for development with auto-reload:
   npm run dev
   ```

4. **The API will be available at:**
   ```
   http://localhost:3001/api/facebook-posts
   ```

5. **Update Vite proxy** (already configured in `vite.config.ts`):
   - Frontend will automatically proxy `/api/*` requests to `http://localhost:3001`

### Option 2: Use CORS Proxy (Development Only)

For quick testing without setting up a backend:

1. The frontend will attempt to use a CORS proxy
2. Update `src/api/facebookScraper.ts` to use your preferred proxy service
3. **Note:** This is not recommended for production due to reliability issues

## How It Works

1. **Frontend Hook** (`src/hooks/useFacebookPosts.ts`):
   - Fetches posts every 4 hours (3x per day as requested)
   - Caches results
   - Handles errors gracefully

2. **API Layer** (`src/api/facebookScraper.ts`):
   - Tries multiple fetching methods
   - Falls back to static content if scraping fails
   - Provides TypeScript types

3. **Backend Server** (`server/facebook-scraper.js`):
   - Handles actual scraping logic
   - Uses Cheerio for HTML parsing
   - Tries mobile Facebook site (easier to scrape)
   - Returns JSON response

4. **Integration** (`src/components/UpdatesSection.tsx`):
   - Combines database news and Facebook posts
   - Displays Facebook posts with special badge
   - Links directly to Facebook posts

## Configuration

### Update Facebook Page URL
If the page URL changes, update:
- `server/facebook-scraper.js`: `FACEBOOK_PAGE_URL`
- `src/api/facebookScraper.ts`: Default parameter in `fetchFacebookPostsRSS()`

### Adjust Fetch Frequency
To change from 3x per day, modify:
- `src/hooks/useFacebookPosts.ts`: Interval in `useEffect`
- `server/facebook-scraper.js`: Cache-Control header

### Environment Variables
Create `.env` file in `server/` directory:
```env
PORT=3001
FACEBOOK_PAGE_URL=https://www.facebook.com/MunicipalityOfQuezonBukidnon
CACHE_DURATION=14400
```

## Production Deployment

### Deploy Backend Server
1. Deploy `server/` to a Node.js hosting service (Heroku, Railway, Render, etc.)
2. Update `vite.config.ts` proxy target to your production server URL
3. Or update `src/api/facebookScraper.ts` to use production API URL

### Example Deployment (Render):
```bash
# In server directory
npm install
npm start
```

Update frontend to use:
```typescript
const response = await fetch('https://your-server.render.com/api/facebook-posts');
```

## Fallback Behavior

If scraping fails:
- Returns fallback posts with welcome message
- Logs errors to console
- Continues to display other news normally
- User experience is not disrupted

## Testing

1. **Test Backend:**
   ```bash
   curl http://localhost:3001/api/facebook-posts
   ```

2. **Test Frontend:**
   - Start dev server: `npm run dev`
   - Navigate to homepage
   - Check browser console for any errors
   - Verify Facebook posts appear in News & Updates section

## Troubleshooting

**Problem:** No posts appearing
- Check if backend server is running
- Check browser console for errors
- Verify Facebook page URL is correct
- Facebook may have blocked the request

**Problem:** Rate limiting errors
- Increase cache duration
- Reduce fetch frequency
- Consider using official Facebook Graph API

**Problem:** CORS errors
- Use backend server instead of direct fetching
- Ensure proxy is configured correctly
- Check server CORS settings

## Future Improvements

1. **Migrate to Facebook Graph API:**
   - Create Facebook App
   - Get Page Access Token
   - Use official Graph API endpoints
   - More reliable and compliant

2. **Add Manual Override:**
   - Admin dashboard option to manually sync Facebook posts
   - Import posts directly from Facebook
   - Edit/curate posts before display

3. **Better Error Handling:**
   - Retry logic with exponential backoff
   - Email alerts when scraping fails
   - Admin dashboard for monitoring

## Legal Considerations

⚠️ **Important:** Web scraping may violate Facebook's Terms of Service. This implementation is provided as a technical solution but:
- Consider using official Facebook Graph API for production
- Review Facebook's Platform Terms and Policies
- Consult legal counsel if unsure
- This implementation is for educational/testing purposes
