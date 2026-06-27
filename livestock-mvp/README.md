# LiveStock MVP

A mobile camera-to-AI pipeline that photographs a pig, sends the image to a multimodal model, and returns an estimated live weight plus four morphometric measurements.

## Quick Start

```bash
cd livestock-mvp
```

### 1. Configure environment

```bash
cp .env.template .env
```

Fill in the values. See `SUPABASE_SETUP.md` for the Supabase credentials.

### 2. Start the backend

```bash
cd server
pnpm install
pnpm run dev
```

Verify: `curl http://localhost:3001/health` should return `{"status":"ok"}`.

### 3. Start the Expo app

```bash
cd app
pnpm install
npx expo start
```

## Project Structure

```
livestock-mvp/
├── app/              # Expo React Native frontend
├── server/           # TypeScript Express backend
├── shared/           # Shared TypeScript types
├── .env.template     # Environment variable template
├── SUPABASE_SETUP.md # How to create and configure Supabase
└── README.md         # This file
```

## Notes

- The MVP uses **Gemini 2.0 Flash** as a stand-in for the production fine-tuned model.
- Depth sensing is simulated via a fixed `scaleCmPerPx` value; ARCore integration is Phase 3.
- Offline mode returns a fixed, plausible result for UI testing without an API key.
