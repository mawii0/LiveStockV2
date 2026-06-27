/**
 * Depth simulation utilities for the MVP.
 * Production Phase 3 will replace these with real ARCore depth data.
 */

/**
 * Estimate centimeters-per-pixel from a known or detected pig width in pixels.
 * @param estimatedPigWidthPx Width of the pig in image pixels
 * @param referencePigWidthCm Known or assumed real-world pig width in cm
 */
export function estimateScaleFromFrame(
  estimatedPigWidthPx: number,
  referencePigWidthCm = 40
): number {
  if (estimatedPigWidthPx <= 0) {
    throw new Error('estimatedPigWidthPx must be greater than 0');
  }
  return referencePigWidthCm / estimatedPigWidthPx;
}

/**
 * Fallback scale constant for early prototype runs before any bounding-box
 * estimation exists. Roughly 0.12 cm/px assumes a 40cm pig spans ~333px.
 */
export const SIMULATED_SCALE_CM_PER_PX = 0.12;
