import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { api } from "@/services/api";

interface LoginResponse {
  access_token: string;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post<LoginResponse>("/auth/signin", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.access_token);
      navigate("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("ERRO LOGIN:", error);

      if (error?.response) {
        alert("E-mail ou senha inválidos");
      } else {
        alert("Erro inesperado");
      }
    } finally {
      setLoading(false);
    }
  }

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

      {/* Card login */}
      <div className="relative z-10 w-[600px] h-[650px]">
        <div className="bg-white w-full rounded-2xl p-8 shadow-xl h-full border border-black">
          <h2 className="text-2xl font-semibold mb-1">Welcome</h2>
          <p className="text-sm text-gray-500 mb-6 py-4">
            Login to your account.
          </p>

          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="mb-5">
              <label className="text-xs">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-lg"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-8">
              <label className="text-xs">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-lg"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <IoEye /> : <IoMdEyeOff />}
                </button>
              </div>
            </div>

            {/* Botão */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-zinc-800 transition"
            >
              {loading ? "Loading..." : "Login"}
            </button>

            {/* Divider */}
            <div className="my-6 flex items-center gap-2">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="text-xs text-gray-400">Or continue with</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            {/* Link para cadastro */}
            <p className="text-sm text-center text-zinc-400">
              Don’t have an account?
              <Link
                to="/register"
                className="text-black hover:text-zinc-400 font-medium"
              >
                Sign up here.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
