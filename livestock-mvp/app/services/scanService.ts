import { ScanMode, ScanResponse } from '../shared/types';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3001';

export async function submitScan(
  imageBase64: string,
  scaleCmPerPx: number,
  mode: ScanMode = 'online'
): Promise<ScanResponse> {
  const res = await fetch(`${API_BASE_URL}/scan`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageBase64, scaleCmPerPx, mode }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || 'Scan request failed');
  }

  return res.json();
}
