import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-zinc-900/80 backdrop-blur p-6 flex flex-col border-r border-zinc-800">
        <h1 className="text-xl font-bold mb-10">LOGO</h1>

        <span className="text-xs text-zinc-400 mb-4">MENU</span>

        <nav className="flex flex-col gap-2">
          <button className="text-left px-4 py-2 rounded-md bg-zinc-800">
            Dashboard
          </button>
          <button className="text-left px-4 py-2 rounded-md hover:bg-zinc-800">
            Inventory
          </button>
          <button className="text-left px-4 py-2 rounded-md hover:bg-zinc-800">
            Financial
          </button>
        </nav>
      </aside>

      {/* CONTEÚDO DAS PÁGINAS */}
      <main className="flex-1 px-8 py-6 bg-zinc-950">
        <Outlet />
      </main>
    </div>
  );
}
