export type ScanMode = 'online' | 'offline';
export type Confidence = 'low' | 'medium' | 'high';

export interface MorphometricMeasurements {
  dorsalBodyLength: number;
  heartGirth: number;
  hipWidth: number;
  dorsalArea: number;
}

export interface MorphometricResult {
  weight: number;
  measurements: MorphometricMeasurements;
  confidence: Confidence;
}

export interface ScanResponse extends MorphometricResult {
  mode: ScanMode;
  flagged: boolean;
  flags?: string[];
  timestamp: string;
}

export interface ScanRecord extends ScanResponse {
  id?: string;
  imageBase64?: string;
  scaleCmPerPx?: number;
}

export interface ScanRequestBody {
  imageBase64: string;
  scaleCmPerPx: number;
  mode?: ScanMode;
}
