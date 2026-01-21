import { createContext, useContext, useState } from "react";
import { adminLogin, adminLogout } from "../api/adminAuthApi";

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const login = async (credentials) => {
    await adminLogin(credentials);
    setIsAdmin(true);
  };

  const logout = async () => {
    await adminLogout();
    setIsAdmin(false);
  };

  return (
    <AdminAuthContext.Provider
      value={{ isAdmin, login, logout }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) {
    throw new Error("useAdminAuth must be used inside AdminAuthProvider");
  }
  return ctx;
}
