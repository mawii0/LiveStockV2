interface LoginScreenProps {
  onLogin: () => void;
  onGoSignUp: () => void;
}

export function LoginScreen({ onLogin, onGoSignUp }: LoginScreenProps) {
  return (
    <div className="w-full h-full flex flex-col bg-white px-6">
      {/* Top spacer */}
      <div className="flex-1" />

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
        <p className="text-gray-400 text-sm mt-1">Sign in to your account</p>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-4 mb-6">
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
        <div className="flex justify-end">
          <button className="text-xs font-semibold" style={{ color: "#2aac80" }}>
            Forgot password?
          </button>
        </div>
      </div>

      {/* Login button */}
      <button
        onClick={onLogin}
        className="w-full py-4 rounded-2xl text-white font-bold text-base mb-5"
        style={{ background: "#2aac80" }}
      >
        Sign In
      </button>

      {/* Sign up link */}
      <p className="text-center text-sm text-gray-400 mb-10">
        Don't have an account?{" "}
        <button
          onClick={onGoSignUp}
          className="font-bold"
          style={{ color: "#2aac80" }}
        >
          Sign Up
        </button>
      </p>

      <div className="flex-1" />
    </div>
  );
}
