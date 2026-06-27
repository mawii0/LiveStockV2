import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ScanRecord } from '../shared/types';

function createSupabaseClient(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.warn('[WARN] Supabase credentials missing. Scan history will not be saved.');
    return null;
  }

  return createClient(url, key);
}

const supabase = createSupabaseClient();

export async function insertScanRecord(record: ScanRecord) {
  if (!supabase) {
    console.warn('[WARN] Skipping Supabase insert: client not configured.');
    return null;
  }

  const { data, error } = await supabase
    .from('scan_records')
    .insert({
      image_base64: record.imageBase64,
      scale_cm_per_px: record.scaleCmPerPx,
      mode: record.mode,
      weight: record.weight,
      measurements: record.measurements,
      confidence: record.confidence,
      flagged: record.flagged,
      flags: record.flags,
    })
    .select()
    .single();

  if (error) {
    console.error('Supabase insert error:', error);
    throw error;
  }

  return data;
}

export async function fetchScanHistory(limit = 50) {
  if (!supabase) {
    console.warn('[WARN] Skipping Supabase fetch: client not configured.');
    return [];
  }

  const { data, error } = await supabase
    .from('scan_records')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Supabase fetch error:', error);
    throw error;
  }

  return data;
}
