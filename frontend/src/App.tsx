import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Register from "./pages/register";
import Inventory from "./pages/inventory";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import SalesPage from "./pages/sales";
import AppLayout from "./layouts/app.layouts";
import Sell from "./pages/sell";

const ProtectedRoute = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/sell" element={<Sell />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
