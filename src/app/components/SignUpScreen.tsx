interface SignUpScreenProps {
  onSignUp: () => void;
  onGoLogin: () => void;
}

export function SignUpScreen({ onSignUp, onGoLogin }: SignUpScreenProps) {
  return (
    <div className="w-full h-full flex flex-col bg-white px-6 overflow-y-auto">
      {/* Top spacer */}
      <div style={{ height: 60 }} />

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Create account</h1>
        <p className="text-gray-400 text-sm mt-1">Get started with LiveStock</p>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-4 mb-6">
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Juan dela Cruz"
            className="w-full px-4 py-3 rounded-xl text-sm text-gray-900 outline-none"
            style={{ background: "#f5f5f5", border: "1px solid #ebebeb" }}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl text-sm text-gray-900 outline-none"
            style={{ background: "#f5f5f5", border: "1px solid #ebebeb" }}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl text-sm text-gray-900 outline-none"
            style={{ background: "#f5f5f5", border: "1px solid #ebebeb" }}
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl text-sm text-gray-900 outline-none"
            style={{ background: "#f5f5f5", border: "1px solid #ebebeb" }}
          />
        </div>
      </div>

      {/* Sign up button */}
      <button
        onClick={onSignUp}
        className="w-full py-4 rounded-2xl text-white font-bold text-base mb-5"
        style={{ background: "#2aac80" }}
      >
        Create Account
      </button>

      {/* Login link */}
      <p className="text-center text-sm text-gray-400 mb-10">
        Already have an account?{" "}
        <button
          onClick={onGoLogin}
          className="font-bold"
          style={{ color: "#2aac80" }}
        >
          Sign In
        </button>
      </p>
    </div>
  );
}
