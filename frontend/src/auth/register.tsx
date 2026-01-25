import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

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
      <div className="flex items-end relative z-10 text-white h-[650px] w-[500px]">
        <div className="flex-col">
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
      <div className=" relative z-10 w-[600px] h-[650px]">
        <div className="flex-col justify-center items-center bg-white w-full rounded-2xl p-8 shadow-xl h-full border border-black">
          <h2 className="text-2xl font-semibold mb-1">Welcome</h2>
          <p className="text-sm text-gray-500 mb-6 py-4">
            Register as a contributor.
          </p>

          <form>
            <div className="mb-5 mt-12">
              <label className="text-xs">Name</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="mb-5">
              <label className="text-xs">E-mail</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="mb-12">
              <label className="text-xs">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                />
                <button
                  type="button"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                >
                  {showPassword ? <IoEye /> : <IoMdEyeOff />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-zinc-800 transition"
            >
              Register
            </button>
          </form>

          <div className="my-6 flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-xs text-gray-400">Or continue with</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <p className="text-xs text-center text-gray-500 mt-6">
            Already have an account?
            <span className="text-black font-medium cursor-pointer">
              Log in here
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
