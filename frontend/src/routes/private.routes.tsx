import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

export default function PrivateRoutes() {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    async function validate() {
      try {
        const res = await api.get("/auth/me");
        console.log("AUTH OK:", res.data);
        setAuthorized(true);
      } catch (err) {
        console.log("AUTH ERROR:", err);
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    }

    validate();
  }, []);

  if (loading) return <div>Loading...</div>;

  return authorized ? <Outlet /> : <Navigate to="/signin" replace />;
}
