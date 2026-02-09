import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="flex justify-between items-center px-5 py-5 bg-cover bg-center min-h-screen w-full"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      {/* Lado esquerdo */}
      <div className="flex items-end relative z-10 text-white h-[650px] w-[500px]">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Without Logistics, <br /> there is no Order or Progress!
          </h1>
          <p className="text-sm text-gray-200">
            It is the intelligent management of product or service dynamics,
            always focusing on reducing time and costs and achieving the highest
            level of customer satisfaction.
          </p>
        </div>
      </div>

      {/* Card Register */}
      <div className="relative z-10 w-[600px] h-[650px]">
        <div className="bg-white w-full rounded-2xl p-10 shadow-xl h-full border border-black flex flex-col">
          {/* Header */}
          <div className="mb-5">
            <h2 className="text-2xl font-semibold mb-1">Welcome</h2>
            <p className="text-sm text-gray-500">Register as a contributor.</p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="text-xs">Name</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="text-xs">E-mail</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="text-xs">Password</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                >
                  {showPassword ? <IoEye /> : <IoMdEyeOff />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2.5 rounded-lg hover:bg-zinc-800 transition mt-2"
            >
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-xs text-gray-400">Or continue with</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Login link */}
          <p className="text-sm text-center text-zinc-400">
            Already have an account?
            <Link
              to="/login"
              className="text-black hover:text-zinc-400 font-medium"
            >
              Log in here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
