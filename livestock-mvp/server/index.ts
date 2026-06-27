import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from the project root .env file before any
// module that depends on them (e.g. the Gemini client) is imported.
const envPath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envPath });

import express from 'express';
import cors from 'cors';
import scanRouter from './routes/scan';

// Warn about missing optional credentials instead of crashing, so the server
// can still be used for offline-mode testing before full configuration.
function warnMissingEnv(name: string) {
  console.warn(`[WARN] Missing environment variable: ${name}`);
  console.warn(`       Make sure ${envPath} exists and contains ${name}.`);
}

if (!process.env.GEMINI_API_KEY) warnMissingEnv('GEMINI_API_KEY');
if (!process.env.SUPABASE_URL) warnMissingEnv('SUPABASE_URL');
if (!process.env.SUPABASE_ANON_KEY) warnMissingEnv('SUPABASE_ANON_KEY');

const app = express();
app.use(cors());
app.use(express.json({ limit: '15mb' }));

app.use('/scan', scanRouter);

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`LiveStock MVP server running on port ${PORT}`);
});
