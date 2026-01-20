import { motion } from "framer-motion";
import {
  FiTrendingUp,
  FiSearch,
  FiLayout,
  FiAward,
} from "react-icons/fi";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-28">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-6"
        >
          <span className="border px-4 py-1 rounded-full text-xs tracking-wide">
            MY SERVICES
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold leading-snug mb-16 max-w-2xl mx-auto"
        >
          The service offer is specifically
          <br />
          designed to meet your needs.
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >

          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            className="border rounded-2xl p-6 text-left bg-[#ECEBFF]
                       transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="h-10 w-10 rounded-full border flex items-center justify-center mb-4">
              <FiTrendingUp size={18} />
            </div>
            <h3 className="font-semibold mb-2">Strategy & Planning</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Streamline your campaigns with tools that improve engagement,
              boost visibility, and help you connect with your audience.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            className="border rounded-2xl p-6 text-left bg-[#F1FFE9]
                       transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="h-10 w-10 rounded-full border flex items-center justify-center mb-4">
              <FiSearch size={18} />
            </div>
            <h3 className="font-semibold mb-2">User Research</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Simplify project workflows with organized tools and strategies
              designed to keep your team aligned and your goals on track.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            className="border rounded-2xl p-6 text-left bg-[#FFE9F3]
                       transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="h-10 w-10 rounded-full border flex items-center justify-center mb-4">
              <FiLayout size={18} />
            </div>
            <h3 className="font-semibold mb-2">Web Design</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Gain valuable insights into user behavior, website performance,
              and key business metrics to optimize your digital presence.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={cardVariants}
            className="border rounded-2xl p-6 text-left bg-[#E9F6FF]
                       transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="h-10 w-10 rounded-full border flex items-center justify-center mb-4">
              <FiAward size={18} />
            </div>
            <h3 className="font-semibold mb-2">Brand Design</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Understand your market with precise data analysis and deep
              customer insights that guide your decision-making processes.
            </p>
          </motion.div>

        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border px-6 py-3 rounded-lg text-sm
                     hover:bg-black hover:text-white transition"
        >
          Check Portfolio
        </motion.button>

      </div>
    </section>
  );
}
