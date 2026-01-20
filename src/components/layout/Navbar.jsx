import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll-spy logic
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 120;

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (!el) continue;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          setActive(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <span
          className="font-semibold text-lg cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          dhrax.dev
        </span>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm relative">
          {sections.map((sec) => (
            <li
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="cursor-pointer relative"
            >
              <span>{sec.label}</span>

              {/* Active underline */}
              {active === sec.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-black"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center gap-1.5"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : {}}
            className="h-[2px] w-6 bg-black"
          />
          <motion.span
            animate={open ? { opacity: 0 } : {}}
            className="h-[2px] w-6 bg-black"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : {}}
            className="h-[2px] w-6 bg-black"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t"
          >
            <ul className="flex flex-col gap-6 px-6 py-6 text-sm">
              {sections.map((sec) => (
                <li
                  key={sec.id}
                  onClick={() => scrollTo(sec.id)}
                  className={`cursor-pointer ${
                    active === sec.id ? "font-semibold" : ""
                  }`}
                >
                  {sec.label}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
