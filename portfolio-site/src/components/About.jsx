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
          <h3 className="text-2xl font-bold text-white mb-6">About Me</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Full-stack Software Engineer with 1.7+ years production experience.
            Specializing in scalable backend, real-time systems, secure APIs for enterprise/gov clients.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            Built HRMS, IoT monitoring, e-commerce - production-grade with 30+ users, 25+ APIs.
          </p>
          <h4 className="mt-6 font-semibold text-white mb-4">What Makes Me Different</h4>
          <p className="text-gray-300">
            Focus on system reliability, observability, postmortems - not just code.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h4 className="font-semibold text-white text-xl mb-6">Core Expertise</h4>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Production backend architecture (Node/Python)</li>
            <li>Real-time WebSockets + dashboards</li>
            <li>Secure JWT/RBAC authentication</li>
            <li>Multi-user scalable systems</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
