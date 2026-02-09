import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-zinc-900 p-6 flex flex-col">
      <span className="text-xs text-zinc-400 mb-4">MENU</span>
      <nav className="flex flex-col gap-2">
        <button
          className="text-left px-4 py-2 rounded-md bg-zinc-800 text-white"
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
        <img />
      </nav>
    </aside>
  );
};
