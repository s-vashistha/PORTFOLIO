import React from "react";
import { motion } from "framer-motion";
import ThreeLaptop from "./ThreeLaptop";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Full-Stack Software Engineer
            <span className="block text-2xl text-gray-400 mt-2">
              Building scalable production systems with real-time APIs
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Engineered platforms for 30+ users with secure APIs, WebSockets, cloud deployments.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Reduced downtime 45%, automated workflows - production-grade real-time systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/Saumya_Software_Engineer_Resume.pdf" download className="btn-primary">
              Download Resume
            </a>
            <a href="#projects" className="btn-secondary">
              View Work
            </a>
            <a href="#live" className="btn-secondary">
              Live Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          className="h-80 bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-gray-700"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="h-full w-full">
            <ThreeLaptop/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
