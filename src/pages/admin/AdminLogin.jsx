import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../../auth/AdminAuthContext";

export default function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await login(form);
      navigate("/admin/blogs");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <section className="py-32 max-w-md mx-auto px-6">
      <h1 className="text-3xl font-bold mb-6">Admin Login</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <input
        className="w-full border p-3 mb-4"
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />

      <input
        type="password"
        className="w-full border p-3 mb-6"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button
        onClick={submit}
        className="w-full py-3 bg-black text-white"
      >
        Login
      </button>
    </section>
  );
}
