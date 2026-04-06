import React from "react";
import { motion as Motion } from "framer-motion";

export default function About() {
  const responsibilities = [
    "Designing secure RESTful APIs and role-based access flows for enterprise applications.",
    "Building modular React and Node.js systems that support internal operations and multi-user workflows.",
    "Creating real-time dashboards and telemetry interfaces for monitoring use cases.",
    "Automating data extraction and reporting workflows with Selenium, BeautifulSoup, and CI/CD pipelines.",
  ];

  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        <Motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">About Me</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            I am a Full Stack Software Engineer focused on building dependable software for real organizations. My work spans enterprise portals, secure backend services, real-time monitoring systems, and responsive interfaces for business and government-facing platforms.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            Across 1.8+ years of hands-on experience, I have delivered HRMS workflows, device monitoring dashboards, structured data platforms, and automation utilities with a strong emphasis on maintainability, security, and production readiness.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30">React.js</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30">Node.js</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30">PostgreSQL</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30">WebSockets</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30">JWT / RBAC</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30">CI/CD</span>
          </div>
        </Motion.div>

        <Motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h4 className="font-semibold text-white text-xl mb-6">Roles and Responsibilities</h4>
          <ul className="text-gray-300 space-y-4">
            {responsibilities.map((responsibility) => (
              <li key={responsibility} className="leading-relaxed">
                {responsibility}
              </li>
            ))}
          </ul>
        </Motion.div>
      </div>
    </section>
  );
}
