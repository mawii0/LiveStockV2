import type { ActiveTab } from "../App";

interface BottomNavProps {
  activeTab: ActiveTab;
  onTabPress: (tab: ActiveTab) => void;
}

export function BottomNav({ activeTab, onTabPress }: BottomNavProps) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 bg-white flex items-end justify-around pb-6 pt-2"
      style={{ height: 80, borderTop: "1px solid #f0f0f0" }}
    >
      {/* Home */}
      <button
        className="flex flex-col items-center gap-0.5 min-w-[56px]"
        onClick={() => onTabPress("home")}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"
            stroke={activeTab === "home" ? "#1a9e6e" : "#9ca3af"}
            strokeWidth="2"
            fill={activeTab === "home" ? "#1a9e6e" : "none"}
          />
          <rect x="9" y="13" width="6" height="9" rx="1"
            fill={activeTab === "home" ? "white" : "none"}
            stroke={activeTab === "home" ? "#1a9e6e" : "#9ca3af"}
            strokeWidth="2"
          />
        </svg>
        <span className="text-[10px]" style={{ color: activeTab === "home" ? "#1a9e6e" : "#9ca3af", fontWeight: 600 }}>
          Home
        </span>
      </button>

      {/* Scan — raised circular button */}
      <button
        className="flex flex-col items-center -mt-5"
        onClick={() => onTabPress("scan")}
        style={{ position: "relative", top: -8 }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
          style={{ background: "linear-gradient(135deg, #6ee07b 0%, #1a9e6e 100%)" }}
        >
          {/* Viewfinder / scan frame icon */}
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect x="1" y="1" width="8" height="8" rx="1.5" stroke="white" strokeWidth="2.2" fill="none"/>
            <rect x="17" y="1" width="8" height="8" rx="1.5" stroke="white" strokeWidth="2.2" fill="none"/>
            <rect x="1" y="17" width="8" height="8" rx="1.5" stroke="white" strokeWidth="2.2" fill="none"/>
            <rect x="17" y="17" width="8" height="8" rx="1.5" stroke="white" strokeWidth="2.2" fill="none"/>
          </svg>
        </div>
        <span className="text-[10px] mt-1" style={{ color: activeTab === "scan" ? "#1a9e6e" : "#9ca3af", fontWeight: 600 }}>
          Scan
        </span>
      </button>

      {/* Connect */}
      <button
        className="flex flex-col items-center gap-0.5 min-w-[56px]"
        onClick={() => onTabPress("connect")}
      >
        {/* Bluetooth icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11"
            stroke={activeTab === "connect" ? "#1a9e6e" : "#9ca3af"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[10px]" style={{ color: activeTab === "connect" ? "#1a9e6e" : "#9ca3af", fontWeight: 600 }}>
          Connect
        </span>
      </button>
    </div>
  );
}
