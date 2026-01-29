import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import AppLayout from "./layouts/app.layouts";
import { PrivateRoutes } from "./routes/private.route";
import Login from "./auth/login";

export default function App() {
  return (
    <Routes>
      {/* Rotas Privadas */}
      <Route element={<PrivateRoutes />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>

      {/* Rotas Públicas */}
      <Route path="/login" element={<Login />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
