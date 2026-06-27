# Supabase Setup Guide for LiveStock MVP

This project uses Supabase to store scan history (pig images, measurements, weight estimates, and quality flags).

## Step 1 — Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up or log in.
2. Click **New project**.
3. Choose or create an organization.
4. Name the project `livestock-mvp` (or any name you prefer).
5. Choose a region close to your backend server.
6. Wait for the project to finish provisioning.

## Step 2 — Get Your API Credentials

Once the project is ready:

1. Open the Supabase dashboard.
2. Go to **Project Settings → API** (usually in the left sidebar under "Configuration").
3. Copy the following values:

| Variable | Where to find it | Example |
|---|---|---|
| `SUPABASE_URL` | Project Settings → API → URL | `https://abcdefghijklmnop.supabase.co` |
| `SUPABASE_ANON_KEY` | Project Settings → API → `anon public` key | `eyJhbG...` |
| `SUPABASE_SERVICE_ROLE_KEY` (optional) | Project Settings → API → `service_role` key | `eyJhbG...` |

> The `service_role` key lets the backend bypass Row Level Security (RLS). Only use it server-side; never expose it in the mobile app.

## Step 3 — Create the Database Table

In the Supabase dashboard:

1. Go to **SQL Editor**.
2. Click **New query**.
3. Paste and run the following SQL:

```sql
-- Enable UUID extension if not already enabled
create extension if not exists "uuid-ossp";

-- Scan history table
create table scan_records (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now(),
  image_base64 text,
  scale_cm_per_px real,
  mode text,
  weight real,
  measurements jsonb,
  confidence text,
  flagged boolean,
  flags jsonb
);

-- Index for fast history lookups
create index idx_scan_records_created_at on scan_records (created_at desc);
```

## Step 4 — Configure Environment Variables

1. Copy `.env.template` to `.env`:

```bash
cp .env.template .env
```

2. Open `.env` and paste your credentials:

```bash
GEMINI_API_KEY=<your_key_from_https://aistudio.google.com/>
PORT=3001
SUPABASE_URL=https://<your-project-id>.supabase.co
SUPABASE_ANON_KEY=<your-anon-key>
# SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```

3. Save the file. The backend will read it on startup.

## Security Notes

- Never commit `.env` to version control. It is already ignored in `.gitignore`.
- Use the `anon` key for any client-side Supabase access.
- Use the `service_role` key only inside the backend (`server/db/supabaseClient.ts`).
- Consider enabling RLS policies on `scan_records` if you add user authentication later.

## Verification

After starting the backend with `pnpm run dev` and running a scan, check the Supabase **Table Editor** → `scan_records` to confirm rows are being inserted.
