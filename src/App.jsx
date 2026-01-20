import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Home />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  );
}
