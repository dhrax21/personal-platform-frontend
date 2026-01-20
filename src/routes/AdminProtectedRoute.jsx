import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAdminMe } from "../api/adminAuthApi";

export default function AdminProtectedRoute() {
  const [checking, setChecking] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function checkAuth() {
      try {
        const res = await getAdminMe();
        if (mounted && res) {
          setAllowed(true);
        }
      } catch {
        // ignore – handled below
      } finally {
        if (mounted) setChecking(false);
      }
    }

    checkAuth();

    return () => {
      mounted = false;
    };
  }, []);

  // While verifying cookie + JWT
  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Checking admin access…</p>
      </div>
    );
  }

  // Not authenticated → redirect to admin login
  if (!allowed) {
    return <Navigate to="/admin/login" replace />;
  }

  // Authenticated → render admin pages
  return <Outlet />;
}
