import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        <motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white">About Me</h3>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Software Engineer with experience in building full-stack web applications,
            real-time dashboards, and ERP systems for government and enterprise clients.
          </p>
          <h4 className="mt-6 font-semibold text-white">Work Experience Highlights</h4>
          <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
            <li>Built and maintained full-stack e-commerce platforms for B2B/B2C ecosystems.</li>
            <li>Developed IoT device-health monitoring with predictive analysis.</li>
            <li>Designed secure REST APIs and implemented role-based dashboards.</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h4 className="font-semibold text-white">What I Care About</h4>
          <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
            <li>Reliability over cleverness</li>
            <li>Clear APIs and clean error handling</li>
            <li>Monitoring, observability, and postmortems</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
