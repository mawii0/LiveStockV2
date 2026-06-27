import { Router } from 'express';
import { runMorphometricInference } from '../pipeline/inference';
import { runOfflineMorphometricInference } from '../pipeline/offlineStub';
import { parseModelResponse } from '../pipeline/parser';
import { validateResult } from '../pipeline/plausibility';
import { insertScanRecord } from '../db/supabaseClient';
import { ScanRequestBody, ScanResponse } from '../shared/types';

const router = Router();

router.post('/', async (req, res) => {
  const { imageBase64, scaleCmPerPx, mode } = req.body as ScanRequestBody;

  if (!imageBase64 || typeof scaleCmPerPx !== 'number') {
    return res.status(400).json({ error: 'imageBase64 and scaleCmPerPx are required' });
  }

  const scanMode = mode || 'online';

  try {
    let parsed;

    if (scanMode === 'offline') {
      parsed = runOfflineMorphometricInference(imageBase64, scaleCmPerPx);
    } else {
      const rawResponse = await runMorphometricInference(imageBase64, scaleCmPerPx);
      parsed = parseModelResponse(rawResponse);
    }

    const { result, flagged, flags } = validateResult(parsed);

    const response: ScanResponse = {
      ...result,
      mode: scanMode,
      flagged,
      flags: flagged ? flags : undefined,
      timestamp: new Date().toISOString(),
    };

    // Save to Supabase (best-effort; failure does not break the response)
    try {
      await insertScanRecord({
        ...response,
        imageBase64,
        scaleCmPerPx,
      });
    } catch (dbErr: any) {
      console.error('Failed to save scan record:', dbErr.message);
    }

    res.json(response);
  } catch (err: any) {
    res.status(500).json({ error: 'Inference failed', detail: err.message });
  }
});

export default router;
