import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminMe, adminLogout } from "../../api/adminAuthApi";

export default function Footer() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAdminMe().then((res) => {
      if (res) setIsAdmin(true);
    });
  }, []);

  const logout = async () => {
    await adminLogout();
    navigate("/admin/login");
  };

  return (
    <footer className="bg-primary py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        <div>
          <h3 className="font-semibold text-lg mb-2">dhrax.dev</h3>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Dheeraj Singh. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 text-sm">
          <a className="hover:text-accent cursor-pointer">About</a>
          <a className="hover:text-accent cursor-pointer">Portfolio</a>
          <a className="hover:text-accent cursor-pointer">Contact</a>
        </div>
      </div>

      {isAdmin && (
        <div className="mt-6 text-center">
          <a
            href="/admin/blogs"
            className="text-xs text-gray-400 underline hover:text-gray-600"
          >
            Admin
          </a>
          <button
            onClick={logout}
            className="ml-4 text-xs text-red-500 underline"
          >
            Logout
          </button>
        </div>
      )}
    </footer>
  );
}
