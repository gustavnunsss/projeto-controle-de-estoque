import { Routes, Route, Navigate } from "react-router-dom";

import Register from "./auth/register";
import Login from "./auth/login";

import Dashboard from "./pages/dashboard";
import Inventory from "./pages/inventory";
import SalesPage from "./pages/sales";
import Sell from "./pages/sell";

import AppLayout from "./layouts/app.layouts";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* SEM proteção */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/sell" element={<Sell />} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
