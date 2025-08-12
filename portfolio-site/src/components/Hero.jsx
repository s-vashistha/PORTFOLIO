import React from "react";
import { motion } from "framer-motion";
import ThreeLaptop from "./ThreeLaptop";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            I build systems that <span className="gradient-text">watch, warn, and whisper solutions.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            From real-time device health dashboards to secure ERP systems,
            I create tools that turn data into decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/Saumya_Software_Engineer_Resume.pdf" download className="btn-primary">
              Download Resume
            </a>
            <a href="#projects" className="btn-secondary">
              See Projects
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="h-80 bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-gray-700"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="h-full w-70">
            <ThreeLaptop/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
