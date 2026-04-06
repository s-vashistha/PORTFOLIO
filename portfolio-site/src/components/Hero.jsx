import React from "react";
import { motion as Motion } from "framer-motion";
import ThreeLaptop from "./ThreeLaptop";

export default function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}Saumya_Software_Engineer_Resume.pdf`;
  const highlights = [
    "1.7+ years building production software",
    "25+ secure REST endpoints delivered",
    "30+ users supported in enterprise workflows",
    "Real-time systems, HRMS, and automation pipelines",
  ];

  return (
    <section className="relative overflow-hidden py-16">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Full-Stack Software Engineer
            <span className="block text-2xl text-gray-400 mt-2">
              Building scalable MERN platforms, secure APIs, and real-time systems
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Full Stack Software Engineer with 1.7+ years of experience building scalable web applications with React.js, Node.js, and PostgreSQL.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            I build modular enterprise platforms, HRMS workflows, monitoring dashboards, and automation pipelines with JWT auth, WebSockets, CI/CD, and production deployment in mind.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 mb-8">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={resumeUrl} download className="btn-primary">
              Download Resume
            </a>
            <a href="#experience" className="btn-secondary">
              Experience
            </a>
            <a href="#live" className="btn-secondary">
              Live Systems
            </a>
          </div>
        </Motion.div>

        <Motion.div
          className="h-80 bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-gray-700"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="h-full w-full">
            <ThreeLaptop/>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
