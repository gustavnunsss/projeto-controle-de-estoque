import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/sidebar";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
