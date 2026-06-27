import { MorphometricMeasurements, MorphometricResult } from '../shared/types';

const BOUNDS: Record<keyof MorphometricMeasurements | 'weight', { min: number; max: number }> = {
  weight: { min: 30, max: 200 },
  dorsalBodyLength: { min: 60, max: 160 },
  heartGirth: { min: 50, max: 130 },
  hipWidth: { min: 20, max: 70 },
  dorsalArea: { min: 1500, max: 12000 },
};

export function validateResult(result: MorphometricResult): {
  result: MorphometricResult;
  flagged: boolean;
  flags: string[];
} {
  const flags: string[] = [];

  if (result.weight < BOUNDS.weight.min || result.weight > BOUNDS.weight.max) {
    flags.push('Weight out of valid range');
  }
  if (
    result.measurements.dorsalBodyLength < BOUNDS.dorsalBodyLength.min ||
    result.measurements.dorsalBodyLength > BOUNDS.dorsalBodyLength.max
  ) {
    flags.push('Body length out of valid range');
  }
  if (
    result.measurements.heartGirth < BOUNDS.heartGirth.min ||
    result.measurements.heartGirth > BOUNDS.heartGirth.max
  ) {
    flags.push('Heart girth out of valid range');
  }
  if (
    result.measurements.hipWidth < BOUNDS.hipWidth.min ||
    result.measurements.hipWidth > BOUNDS.hipWidth.max
  ) {
    flags.push('Hip width out of valid range');
  }
  if (
    result.measurements.dorsalArea < BOUNDS.dorsalArea.min ||
    result.measurements.dorsalArea > BOUNDS.dorsalArea.max
  ) {
    flags.push('Dorsal area out of valid range');
  }

  return { result, flagged: flags.length > 0, flags };
}
