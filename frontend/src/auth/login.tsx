import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-semibold mb-1">Welcome back</h2>
        <p className="text-sm text-gray-500 mb-6">Log in to your account</p>

        <form className="space-y-4">
          <div>
            <label className="text-sm">E-mail</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="text-sm">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
              >
                👁
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-zinc-800 transition"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-6">
          Don’t have an account?
          <span className="text-black font-medium cursor-pointer">
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}
