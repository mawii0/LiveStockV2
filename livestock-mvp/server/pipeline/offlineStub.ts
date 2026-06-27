import { MorphometricResult } from '../shared/types';

/**
 * Deterministic pseudo-random number generator seeded from a string.
 * Lets the offline stub return different (but stable) demo results for
 * different uploaded images without calling Gemini.
 */
function createSeededRandom(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  const s = Math.abs(hash) || 1;
  let state = s % 2147483647;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

function randomBetween(rand: () => number, min: number, max: number): number {
  return min + rand() * (max - min);
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * Offline demo stub.
 *
 * Returns a plausible, deterministic result derived from the uploaded image
 * so that two different pig pictures produce different measurements while
 * the same picture always produces the same measurement. No network call to
 * Gemini is made, so this does not consume API quota.
 */
export function runOfflineMorphometricInference(
  imageBase64?: string,
  _scaleCmPerPx?: number
): MorphometricResult {
  const seed = imageBase64 || `${Date.now()}`;
  const rand = createSeededRandom(seed);

  // Generate correlated, plausible pig measurements within the validation bounds.
  const dorsalBodyLength = randomBetween(rand, 75, 145);
  const heartGirth = randomBetween(rand, 65, 115);
  const hipWidth = randomBetween(rand, 28, 58);

  // Dorsal area approximated as length * hip-width * shape factor.
  const shapeFactor = randomBetween(rand, 0.35, 0.55);
  const dorsalArea = round2(dorsalBodyLength * hipWidth * shapeFactor);

  // Approximate live weight for a pig (kg) from girth and length.
  const weight = round2((Math.pow(heartGirth, 2) * dorsalBodyLength) / 11000);

  const confidences: Array<'low' | 'medium' | 'high'> = ['low', 'medium', 'high'];
  const confidence = confidences[Math.floor(rand() * confidences.length)];

  return {
    weight,
    measurements: {
      dorsalBodyLength: round2(dorsalBodyLength),
      heartGirth: round2(heartGirth),
      hipWidth: round2(hipWidth),
      dorsalArea,
    },
    confidence,
  };
}
