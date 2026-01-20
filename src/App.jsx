import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import BlogsPage from "./pages/BlogsPage";
import BlogDetail from "./pages/BlogDetail";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminBlogs from "./pages/admin/AdminBlogs";
import AdminBlogForm from "./pages/admin/AdminBlogForm";

import AdminProtectedRoute from "./routes/AdminProtectedRoute";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location}>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />

            {/* Admin login */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Protected admin routes */}
            <Route element={<AdminProtectedRoute />}>
              <Route path="/admin/blogs" element={<AdminBlogs />} />
              <Route path="/admin/blogs/create" element={<AdminBlogForm />} />
              <Route path="/admin/blogs/edit/:id" element={<AdminBlogForm />} />
            </Route>
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  );
}
