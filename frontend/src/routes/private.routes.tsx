import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

export default function PrivateRoutes() {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    async function validate() {
      try {
        await api.get("/auth/me");
        setAuthorized(true);
      } catch {
        localStorage.removeItem("token");
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    }

    validate();
  }, []);

  if (loading) return <div>Carregando...</div>;

  return authorized ? <Outlet /> : <Navigate to="/login" replace />;
}
