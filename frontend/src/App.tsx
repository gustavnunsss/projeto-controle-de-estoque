import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import AppLayout from "./layouts/app.layouts";
import PrivateRoutes from "./routes/private.routes";
import Login from "./auth/login";
import Inventory from "./pages/inventory";
import Sales from "./pages/sales";
import Sell from "./pages/sell";
import Register from "./auth/register";

export default function App() {
  return (
    <Routes>
      {/* Rotas Privadas */}
      <Route element={<PrivateRoutes />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/sell" element={<Sell />} />
        </Route>
      </Route>

      {/* Rotas Públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
