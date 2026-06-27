import type { ActiveTab } from "../App";
import { BottomNav } from "./BottomNav";
import pigIconImg from "../../imports/livestock_icons/pig_icon.png";
import cowIconImg from "../../imports/livestock_icons/cow_icon.png";

interface HomeScreenProps {
  activeTab: ActiveTab;
  onTabPress: (tab: ActiveTab) => void;
  onCardPress: () => void;
  onProfilePress: () => void;
}

export function HomeScreen({
  activeTab,
  onTabPress,
  onCardPress,
  onProfilePress,
}: HomeScreenProps) {
  return (
    <div className="w-full h-full flex flex-col bg-white relative">
      {/* Header gradient banner */}
      <div
        className="flex-shrink-0 px-5 pt-12 pb-8 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #6ee07b 0%, #1a9e6e 60%, #0e7a56 100%)",
          borderBottomLeftRadius: 28,
          borderBottomRightRadius: 28,
          minHeight: 140,
        }}
      >
        {/* Decorative blob */}
        <div
          className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-20"
          style={{ background: "white" }}
        />
        <div
          className="absolute bottom-0 right-8 w-16 h-16 rounded-full opacity-10"
          style={{ background: "white" }}
        />
        <div className="flex items-center gap-3 relative z-10">
          {/* Avatar — tappable → Profile */}
          <button
            onClick={onProfilePress}
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.3)" }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="8" r="4" fill="white" />
              <path
                d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </button>
          <div>
            <p className="text-white opacity-90 text-sm">
              Hello,
            </p>
            <p className="text-white font-bold text-lg leading-tight">
              Juan!
            </p>
          </div>
        </div>
        <p className="text-white opacity-70 text-xs mt-1 relative z-10">
          Sunday, 12 October 2025
        </p>
      </div>

      {/* Body */}
      <div className="flex-1 px-5 pt-6 mt-8 mb-8 pb-24 overflow-y-auto">
        <h2 className="text-gray-900 font-bold text-lg mb-1">
          Choose an animal
        </h2>
        <p className="text-gray-400 text-sm mb-5">
          Select the type of animal you want to scan
        </p>

        {/* Pig card */}
        <button
          onClick={onCardPress}
          className="w-full bg-white rounded-2xl p-10 mb-4 mt-8 flex items-center gap-4 text-left"
          style={{
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            border: "1px solid #f3f3f3",
          }}
        >
          <div>
            <img
              src={pigIconImg}
              alt="Pig icon"
              className="w-14 h-14 object-contain"
            />
          </div>
          <div className="flex-1">
            <p className="text-gray-900 font-bold text-base">
              Pig / Baboy
            </p>
            <p className="text-gray-400 text-sm">
              Swine Scanning
            </p>
          </div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 18l6-6-6-6"
              stroke="#d1d5db"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Cow card */}
        <button
          onClick={onCardPress}
          className="w-full bg-white rounded-2xl p-10 mt-6 flex items-center gap-4 text-left"
          style={{
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            border: "1px solid #f3f3f3",
          }}
        >
          <div>
            <img
              src={cowIconImg}
              alt="Cow icon"
              className="w-14 h-14 object-contain"
            />
          </div>
          <div className="flex-1">
            <p className="text-gray-900 font-bold text-base">
              Cow / Baka
            </p>
            <p className="text-gray-400 text-sm">
              Cattle Scanning
            </p>
          </div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 18l6-6-6-6"
              stroke="#d1d5db"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <BottomNav
        activeTab={activeTab}
        onTabPress={onTabPress}
      />
    </div>
  );
}

function PigIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="20" rx="9" ry="7" fill="#1a9e6e" />
      <circle cx="16" cy="12" r="6" fill="#1a9e6e" />
      <ellipse
        cx="16"
        cy="14.5"
        rx="3"
        ry="2"
        fill="rgba(255,255,255,0.4)"
      />
      <circle cx="15" cy="14.8" r="0.7" fill="white" />
      <circle cx="17" cy="14.8" r="0.7" fill="white" />
      <circle
        cx="13.5"
        cy="11"
        r="1"
        fill="rgba(255,255,255,0.6)"
      />
      <circle
        cx="18.5"
        cy="11"
        r="1"
        fill="rgba(255,255,255,0.6)"
      />
      <path
        d="M10 8 Q8 6 9 4"
        stroke="#1a9e6e"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse
        cx="9.5"
        cy="4.5"
        rx="2"
        ry="2.5"
        fill="#1a9e6e"
        transform="rotate(-15 9.5 4.5)"
      />
      <path
        d="M22 8 Q24 6 23 4"
        stroke="#1a9e6e"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse
        cx="22.5"
        cy="4.5"
        rx="2"
        ry="2.5"
        fill="#1a9e6e"
        transform="rotate(15 22.5 4.5)"
      />
      <rect
        x="9"
        y="25"
        width="3"
        height="5"
        rx="1.5"
        fill="#1a9e6e"
      />
      <rect
        x="13"
        y="25.5"
        width="3"
        height="4.5"
        rx="1.5"
        fill="#1a9e6e"
      />
      <rect
        x="17"
        y="25.5"
        width="3"
        height="4.5"
        rx="1.5"
        fill="#1a9e6e"
      />
      <rect
        x="21"
        y="25"
        width="3"
        height="5"
        rx="1.5"
        fill="#1a9e6e"
      />
    </svg>
  );
}

function CowIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      {/* Body */}
      <ellipse cx="16" cy="21" rx="10" ry="7" fill="#1a9e6e" />
      {/* Head */}
      <ellipse cx="16" cy="12" rx="7" ry="6" fill="#1a9e6e" />
      {/* Snout */}
      <ellipse
        cx="16"
        cy="15"
        rx="4"
        ry="2.5"
        fill="rgba(255,255,255,0.4)"
      />
      <circle cx="14.5" cy="15.2" r="0.9" fill="white" />
      <circle cx="17.5" cy="15.2" r="0.9" fill="white" />
      {/* Eyes */}
      <circle
        cx="12.5"
        cy="11"
        r="1.1"
        fill="rgba(255,255,255,0.7)"
      />
      <circle
        cx="19.5"
        cy="11"
        r="1.1"
        fill="rgba(255,255,255,0.7)"
      />
      {/* Horns */}
      <path
        d="M10 7 Q8 4 7 5"
        stroke="#1a9e6e"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22 7 Q24 4 25 5"
        stroke="#1a9e6e"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Spots */}
      <ellipse
        cx="14"
        cy="20"
        rx="3"
        ry="2"
        fill="rgba(255,255,255,0.25)"
      />
      <ellipse
        cx="20"
        cy="22"
        rx="2"
        ry="1.5"
        fill="rgba(255,255,255,0.2)"
      />
      {/* Legs */}
      <rect
        x="8"
        y="26"
        width="3"
        height="5"
        rx="1.5"
        fill="#1a9e6e"
      />
      <rect
        x="12.5"
        y="26.5"
        width="3"
        height="4.5"
        rx="1.5"
        fill="#1a9e6e"
      />
      <rect
        x="17"
        y="26.5"
        width="3"
        height="4.5"
        rx="1.5"
        fill="#1a9e6e"
      />
      <rect
        x="21.5"
        y="26"
        width="3"
        height="5"
        rx="1.5"
        fill="#1a9e6e"
      />
    </svg>
  );
}