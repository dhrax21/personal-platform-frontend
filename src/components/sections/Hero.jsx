import { motion } from "framer-motion";
import profileImg from "../../assets/profile.jpg";
import SocialLinks from "../ui/SocialLinks";

export default function Hero() {
  return (
   <section id="home" className="bg-primary pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block mb-6 border px-4 py-1 rounded-full text-xs"
          >
            HELLO!
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold leading-tight mb-6"
          >
            I’m Dheeraj Singh,
            <br />
            a Software Engineer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-700 max-w-md mb-8"
          >
            Backend-focused developer building scalable systems using
            Java, Spring Boot, and modern frontend tools.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="px-6 py-3 border rounded-lg text-sm hover:bg-black hover:text-white transition"
          >
            See My Works
          </motion.button>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
           <SocialLinks />
          <div className="absolute inset-0 bg-[#B6A8E5] rounded-t-full" />

          <div className="relative z-10 flex justify-center pt-6">
            <img
              src={profileImg}
              alt="Profile"
              className="h-[420px] w-[320px] object-cover rounded-t-full"
            />
          </div>
        </motion.div>
        <a
          href="/blogs"
          className="inline-block mt-12 text-sm underline hover:text-accent"
        >
          View all articles →
        </a>

      </div>
    </section>
  );
}
