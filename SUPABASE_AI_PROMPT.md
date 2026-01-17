# Supabase AI Assistant Prompt

Copy and paste this prompt into the Supabase AI Assistant (in your Supabase dashboard):

---

## SYNC DATABASE SCHEMA AND GENERATE TYPES

I need to sync my Supabase database schema and generate TypeScript types for my React application.

**Project Details:**
- Project ID: `coiyzrbwfexbgpndsfdq`
- Project URL: `https://coiyzrbwfexbgpndsfdq.supabase.co`
- Framework: React + TypeScript + Vite
- Using `@supabase/supabase-js` client library

**Please:**

1. **Analyze my current database schema** (all tables, views, functions, and relationships)

2. **Generate/update TypeScript types** for all database tables including:
   - `profiles` table
   - `user_roles` table
   - `news` table
   - `events` table
   - `documents` table
   - `bac_documents` table
   - `contacts` or `messages` table
   - Any other tables in the schema

3. **Ensure types match the actual database structure** including:
   - Column types and nullability
   - Foreign key relationships
   - Enums and custom types (e.g., user roles: 'admin', 'superadmin', 'bac', 'user')
   - RLS policies (if relevant to types)

4. **Provide the complete Database type definition** that can be used with:
   ```typescript
   createClient<Database>(url, key)
   ```

5. **Include proper TypeScript interfaces** for:
   - Table row types
   - Insert types
   - Update types
   - Select types with relationships

**The types should be:**
- Compatible with `@supabase/supabase-js` v2
- Follow the standard Supabase TypeScript type generation format
- Include all columns, relationships, and constraints
- Properly typed for null/undefined values

**Output format:**
Please provide the complete TypeScript type definitions that I can copy into my `src/integrations/supabase/types.ts` file.

---

## Alternative Shorter Prompt

If the above is too long, use this shorter version:

---

**Sync my Supabase database schema and generate TypeScript types for project `coiyzrbwfexbgpndsfdq`. Include all tables (profiles, user_roles, news, events, documents, bac_documents, contacts) with proper types, relationships, and enums. Output should be compatible with @supabase/supabase-js v2 and ready to use with `createClient<Database>()`.**

---

## How to Use

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/coiyzrbwfexbgpndsfdq
2. Open the AI Assistant (usually in the sidebar or top menu)
3. Copy and paste one of the prompts above
4. The AI will analyze your schema and generate the types
5. Copy the generated types and update `src/integrations/supabase/types.ts`

## After Syncing

1. Update `src/integrations/supabase/types.ts` with the new types
2. Restart your dev server: `npm run dev`
3. Check for any TypeScript errors
4. Test that all database queries still work correctly
