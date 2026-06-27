import type { ActiveTab, ConnectState } from "../App";
import { BottomNav } from "./BottomNav";

interface ConnectScreenProps {
  connectState: ConnectState;
  activeTab: ActiveTab;
  onTabPress: (tab: ActiveTab) => void;
  onBack: () => void;
  onConnectDevice: () => void;
  onStartScanning: () => void;
}

export function ConnectScreen({
  connectState,
  activeTab,
  onTabPress,
  onBack,
  onConnectDevice,
  onStartScanning,
}: ConnectScreenProps) {
  return (
    <div className="w-full h-full flex flex-col bg-gray-50 relative">
      {/* Header — centered title layout */}
      <div className="px-5 pt-12 pb-4 flex-shrink-0 flex items-center justify-center relative">
        <button onClick={onBack} className="absolute left-5">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 12H5M5 12l7-7M5 12l7 7"
              stroke="#111"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="text-center">
          <h1 className="text-gray-900 font-bold text-lg">
            Device Connection
          </h1>
          <p className="text-gray-400 text-xs mt-0.5">
            Connect your external device
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col items-center px-5 pb-24 pt-8 mt-6 gap-5">
        {connectState === "ready" && (
          <ReadyState onConnectDevice={onConnectDevice} />
        )}
        {connectState === "pairing" && <PairingState />}
        {connectState === "connected" && (
          <ConnectedState onStartScanning={onStartScanning} />
        )}
      </div>

      <BottomNav
        activeTab={activeTab}
        onTabPress={onTabPress}
      />
    </div>
  );
}

function ReadyState({
  onConnectDevice,
}: {
  onConnectDevice: () => void;
}) {
  return (
    <>
      {/* Bluetooth circle — smaller, matches design */}
      <div
        className="w-18 h-18 rounded-full flex items-center justify-center"
        style={{
          background: "#1a6ef5",
          boxShadow: "0 8px 24px rgba(26,110,245,0.35)",
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M12 13L36 35L24 47V1L36 13L12 35"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Status text */}
      <div className="text-center -mt-1">
        <p
          className="font-bold text-base"
          style={{ color: "#1a6ef5" }}
        >
          Ready to Connect
        </p>
        <p className="text-gray-400 text-xs mt-1">
          Please connect your device
        </p>
      </div>

      {/* How to Connect card */}
      <div
        className="w-full bg-white rounded-2xl mt-6 p-5"
        style={{
          boxShadow:
            "0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
          border: "1px solid #f0f0f0",
        }}
      >
        <p
          className="font-bold text-sm mb-4"
          style={{ color: "#1a6ef5" }}
        >
          How to Connect
        </p>
        {[
          "Turn on your external device",
          "Enable Bluetooth on this device",
          "Tap the connect button below",
        ].map((step, i) => (
          <div
            key={i}
            className="flex items-center gap-3 mb-3 last:mb-0"
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
              style={{
                background:
                  i === 0
                    ? "#6BBBED"
                    : i === 1
                      ? "#70A924"
                      : "#07746D",
              }}
            >
              {i + 1}
            </div>
            <p className="text-gray-700 text-sm">{step}</p>
          </div>
        ))}
      </div>

      {/* Connect button — rounded pill */}
      <button
        onClick={onConnectDevice}
        className="w-full py-4 mt-8 rounded-2xl text-white font-bold text-base"
        style={{
          background: "#1451A1",
          boxShadow: "0 4px 16px rgba(15,23,42,0.3)",
        }}
      >
        Connect Device
      </button>
    </>
  );
}

function PairingState() {
  return (
    <>
      <div className="w-20 h-20 rounded-full flex items-center justify-center mb-2 relative">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "5px solid #e0e9ff",
            borderTopColor: "#1a6ef5",
            borderRightColor: "#1a6ef5",
            animation: "spin 1s linear infinite",
          }}
        />
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
      <p className="font-bold text-gray-900 text-lg">
        Pairing in Progress
      </p>
      <p className="text-gray-400 text-sm text-center">
        Please wait while we establish connection
      </p>
    </>
  );
}

function ConnectedState({
  onStartScanning,
}: {
  onStartScanning: () => void;
}) {
  return (
    <>
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-2"
        style={{
          background: "#f0fdf4",
          border: "3px solid #1a9e6e",
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 52 52"
          fill="none"
        >
          <circle
            cx="26"
            cy="26"
            r="24"
            stroke="#1a9e6e"
            strokeWidth="2"
          />
          <path
            d="M14 26l8 8 16-16"
            stroke="#1a9e6e"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p
        className="font-bold text-lg"
        style={{ color: "#1a9e6e" }}
      >
        Connected Successfully!
      </p>
      <p className="text-gray-400 text-sm text-center">
        Device is ready for scanning
      </p>
      <button
        onClick={onStartScanning}
        className="w-full py-4 rounded-2xl text-white font-bold text-base mt-4"
        style={{
          background: "#1a9e6e",
          boxShadow: "0 4px 16px rgba(26,158,110,0.3)",
        }}
      >
        Start Scanning
      </button>
    </>
  );
}