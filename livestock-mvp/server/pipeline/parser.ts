import { MorphometricResult } from '../shared/types';

export function parseModelResponse(raw: string): MorphometricResult {
  // Remove markdown code fences and trim whitespace
  const cleaned = raw.replace(/```json|```/g, '').trim();

  let parsed: any;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    throw new Error('Model returned unparseable response: ' + cleaned);
  }

  // Basic shape validation
  if (typeof parsed.estimated_weight_kg !== 'number') {
    throw new Error('Missing or invalid field: estimated_weight_kg');
  }
  if (typeof parsed.dorsal_body_length_cm !== 'number') {
    throw new Error('Missing or invalid field: dorsal_body_length_cm');
  }
  if (typeof parsed.heart_girth_cm !== 'number') {
    throw new Error('Missing or invalid field: heart_girth_cm');
  }
  if (typeof parsed.hip_width_cm !== 'number') {
    throw new Error('Missing or invalid field: hip_width_cm');
  }
  if (typeof parsed.dorsal_area_cm2 !== 'number') {
    throw new Error('Missing or invalid field: dorsal_area_cm2');
  }

  const validConfidence = ['low', 'medium', 'high'];
  const confidence = validConfidence.includes(parsed.confidence)
    ? parsed.confidence
    : 'medium';

  return {
    weight: parsed.estimated_weight_kg,
    measurements: {
      dorsalBodyLength: parsed.dorsal_body_length_cm,
      heartGirth: parsed.heart_girth_cm,
      hipWidth: parsed.hip_width_cm,
      dorsalArea: parsed.dorsal_area_cm2,
    },
    confidence,
  };
}
