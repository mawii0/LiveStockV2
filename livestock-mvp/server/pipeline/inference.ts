import { GoogleGenAI } from '@google/genai';

let ai: GoogleGenAI | null = null;

function getAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set in the environment.');
  }
  if (!ai) {
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
}

const LIVESTOCK_PROMPT = `
You are an AI system that estimates the live weight of Philippine domestic pigs
from a dorsal (top-down) smartphone image.

The pixel-to-centimeter scale has been calibrated. Follow these five steps exactly
and respond ONLY in the JSON format below. Do not add any explanation outside the JSON.

STEP 1: Estimate dorsal body length in centimeters (snout to tail base).
STEP 2: Estimate heart girth height in centimeters (widest point behind shoulders).
STEP 3: Estimate hip width in centimeters (widest point at hindquarters).
STEP 4: Estimate dorsal surface area in square centimeters.
STEP 5: Using the above measurements, estimate the final live weight in kilograms
        for a Philippine domestic pig (Sus scrofa domesticus).

Respond ONLY in this exact JSON format:
{
  "dorsal_body_length_cm": <number>,
  "heart_girth_cm": <number>,
  "hip_width_cm": <number>,
  "dorsal_area_cm2": <number>,
  "estimated_weight_kg": <number>,
  "confidence": "<low|medium|high>"
}
`;

export async function runMorphometricInference(
  imageBase64: string,
  scaleCmPerPx: number
): Promise<string> {
  const imagePart = {
    inlineData: { data: imageBase64, mimeType: 'image/jpeg' },
  };

  const textPart = {
    text: `Scale calibration: ${scaleCmPerPx.toFixed(4)} cm per pixel.\n\n${LIVESTOCK_PROMPT}`,
  };

  const result = await getAI().models.generateContent({
    model: 'gemini-2.0-flash',
    contents: [textPart, imagePart],
  });

  const text = result.text;
  if (!text) {
    throw new Error('Gemini returned an empty response.');
  }
  return text;
}
