import { CircleUser, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-64 h-screen sticky top-0 bg-zinc-900 p-6 flex flex-col">
      {/* MENU */}
      <span className="text-xs text-zinc-400 mb-4">MENU</span>

      <nav className="flex flex-col gap-2">
        <button
          className="text-left px-4 py-2 rounded-md hover:bg-zinc-800 text-zinc-200"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>

        <button
          className="text-left px-4 py-2 rounded-md hover:bg-zinc-800 text-zinc-200"
          onClick={() => navigate("/inventory")}
        >
          Inventory
        </button>

        <button
          className="text-left px-4 py-2 rounded-md hover:bg-zinc-800 text-zinc-200"
          onClick={() => navigate("/sales")}
        >
          Sales
        </button>

        <button
          className="text-left px-4 py-2 rounded-md hover:bg-zinc-800 text-zinc-200"
          onClick={() => navigate("/sell")}
        >
          Sell
        </button>
      </nav>

      {/* USUÁRIO (fica sempre embaixo) */}
      <div className="mt-auto pt-6 border-t border-zinc-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-9 w-9 rounded-full bg-zinc-800 flex items-center justify-center">
            <CircleUser className="h-5 w-5 text-zinc-300" />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-medium text-white">Usuário</p>
            <p className="text-xs text-zinc-500">admin@email.com</p>
          </div>
        </div>

        <Button
          variant="ghost"
          className="w-full justify-start gap-2 text-zinc-400 hover:text-white hover:bg-zinc-800"
          onClick={() => navigate("/login")}
        >
          <LogOut className="h-4 w-4" />
          Trocar conta
        </Button>
      </div>
    </aside>
  );
};
