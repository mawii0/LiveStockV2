import type { ScanState } from "../App";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const PIG_PEN_URL =
  "https://images.unsplash.com/photo-1716140238774-42cc9572c2a4?w=375&h=500&fit=crop&auto=format";

interface ScanningScreenProps {
  scanState: ScanState;
  onBack: () => void;
  onScanPress: () => void;
  onScanAgain: () => void;
}

export function ScanningScreen({ scanState, onBack, onScanPress, onScanAgain }: ScanningScreenProps) {
  const hasFeed = scanState === "with-feed" || scanState === "complete-feed" || scanState === "no-detect-feed";
  const isComplete = scanState === "complete" || scanState === "complete-feed";
  const isNoDetect = scanState === "no-detect" || scanState === "no-detect-feed";
  const isNoDevice = scanState === "no-device";

  return (
    <div className="w-full h-full flex flex-col relative" style={{ background: "#4a4a4a" }}>
      {/* Header */}
      <div className="px-5 pt-12 pb-4 flex-shrink-0 z-10 relative">
        <button onClick={onBack} className="mb-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="text-white font-bold text-xl">Live Scanning</h1>
        <p className="text-gray-300 text-sm">External device camera</p>
      </div>

      {/* Viewfinder area */}
      <div className="flex-1 flex items-center justify-center px-6 relative">
        <div
          className="w-full relative overflow-hidden"
          style={{
            height: 320,
            borderRadius: 16,
            background: "#5a5a5a",
          }}
        >
          {/* Live feed image */}
          {hasFeed && (
            <ImageWithFallback
              src={PIG_PEN_URL}
              alt="Live pig pen camera feed"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Corner brackets — only show when not no-device */}
          {!isNoDevice && (
            <>
              {/* TL */}
              <div className="absolute top-4 left-4">
                <CornerBracket rotate="0" />
              </div>
              {/* TR */}
              <div className="absolute top-4 right-4">
                <CornerBracket rotate="90" />
              </div>
              {/* BL */}
              <div className="absolute bottom-4 left-4">
                <CornerBracket rotate="270" />
              </div>
              {/* BR */}
              <div className="absolute bottom-4 right-4">
                <CornerBracket rotate="180" />
              </div>
            </>
          )}

          {/* No device message */}
          {isNoDevice && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <p className="text-white font-bold text-lg text-center">No Device Detected</p>
              <p className="text-gray-300 text-sm text-center">Connect your device to start scanning</p>
            </div>
          )}
        </div>
      </div>

      {/* Result cards and bottom buttons */}
      <div className="px-5 pb-8 pt-4 z-10 relative">
        {/* Scan Complete card */}
        {isComplete && (
          <div
            className="w-full rounded-2xl p-4 mb-3"
            style={{ background: "#1a9e6e" }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.3)"/>
                  <path d="M7 12l3.5 3.5L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white font-bold text-base">Scan Complete</span>
              </div>
              <span className="text-white opacity-70 text-xs">Just now</span>
            </div>
            <p className="text-white text-sm">Swine detected</p>
            <p className="text-white text-sm">Weight: ~ 90 kg</p>
            <p className="text-white text-sm">Age: ~ 22 weeks</p>
            <p className="text-white text-sm">Gender: Female</p>
          </div>
        )}

        {/* No Swine Detected card */}
        {isNoDetect && (
          <div
            className="w-full rounded-2xl p-4 mb-3"
            style={{ background: "#e05555" }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.3)"/>
                  <path d="M8 8l8 8M16 8l-8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <span className="text-white font-bold text-base">No Swine Detected</span>
              </div>
              <span className="text-white opacity-70 text-xs">Just now</span>
            </div>
            <p className="text-white text-sm">Please try again</p>
          </div>
        )}

        {/* Bottom button */}
        {!isNoDevice && (
          <button
            onClick={isComplete || isNoDetect ? onScanAgain : onScanPress}
            className="w-full py-4 rounded-xl text-white font-bold text-base flex items-center justify-center gap-2"
            style={{ background: "rgba(30,30,30,0.85)" }}
          >
            {isComplete ? (
              "Scan Now"
            ) : isNoDetect ? (
              "Scan Again"
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="4" fill="white"/>
                  <path d="M2 12C2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10S2 17.5 2 12z" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
                Start Scanning
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

function CornerBracket({ rotate }: { rotate: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path d="M2 10V2H10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
