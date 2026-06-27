interface ProfileScreenProps {
  onBack: () => void;
}

const SCAN_HISTORY = [
  { id: 1, animal: "Pig / Baboy", date: "12 Oct 2025, 9:42 AM", weight: "~90 kg", age: "~22 weeks", gender: "Female", result: "success" },
  { id: 2, animal: "Pig / Baboy", date: "11 Oct 2025, 3:10 PM", weight: "—", age: "—", gender: "—", result: "fail" },
  { id: 3, animal: "Cow / Baka", date: "10 Oct 2025, 11:05 AM", weight: "~210 kg", age: "~18 months", gender: "Male", result: "success" },
  { id: 4, animal: "Pig / Baboy", date: "8 Oct 2025, 8:30 AM", weight: "~85 kg", age: "~20 weeks", gender: "Female", result: "success" },
];

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  return (
    <div className="w-full h-full flex flex-col bg-white">

      {/* Header */}
      <div className="flex-shrink-0 px-5 pt-12 pb-4 flex items-center gap-3 border-b border-gray-100">
        <button onClick={onBack}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="text-gray-900 font-bold text-lg">Profile</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-10">

        {/* Avatar + info */}
        <div className="flex flex-col items-center py-8 gap-2">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-1"
            style={{ background: "#2aac80" }}
          >
            J
          </div>
          <p className="text-gray-900 font-bold text-xl">Juan dela Cruz</p>
          <p className="text-gray-400 text-sm">juan@example.com</p>
        </div>

        {/* Stats row */}
        <div className="flex gap-3 mb-8">
          {[
            { label: "Total Scans", value: "4" },
            { label: "Successful", value: "3" },
            { label: "Animals", value: "2" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex-1 rounded-2xl flex flex-col items-center py-4 gap-1"
              style={{ background: "#f5f5f5" }}
            >
              <span className="text-xl font-bold text-gray-900">{s.value}</span>
              <span className="text-[11px] text-gray-400 text-center">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Scan history */}
        <div>
          <p className="text-gray-900 font-bold text-base mb-3">Scan History</p>
          <div className="flex flex-col gap-3">
            {SCAN_HISTORY.map((entry) => (
              <div
                key={entry.id}
                className="w-full rounded-2xl p-4"
                style={{ background: "#f9f9f9", border: "1px solid #efefef" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: entry.result === "success" ? "#2aac80" : "#e05555" }}
                    />
                    <span className="text-gray-900 font-bold text-sm">{entry.animal}</span>
                  </div>
                  <span className="text-gray-400 text-xs">{entry.date}</span>
                </div>
                {entry.result === "success" ? (
                  <div className="grid grid-cols-3 gap-2 mt-1">
                    {[
                      { label: "Weight", val: entry.weight },
                      { label: "Age", val: entry.age },
                      { label: "Gender", val: entry.gender },
                    ].map((d) => (
                      <div key={d.label}>
                        <p className="text-[10px] text-gray-400">{d.label}</p>
                        <p className="text-xs font-semibold text-gray-700">{d.val}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-gray-400 mt-1">No animal detected</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sign out */}
        <button
          className="w-full mt-8 py-3 rounded-2xl text-sm font-bold"
          style={{ background: "#fff0f0", color: "#e05555", border: "1px solid #ffd0d0" }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
