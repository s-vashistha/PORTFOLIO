import React from "react";
import { motion as Motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <Motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-white mb-12"
        >
          Professional Experience
        </Motion.h3>

        <div className="space-y-12">
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all hover:scale-[1.01] shadow-xl hover:shadow-2xl"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Software Engineer</h4>
                <p className="text-blue-400 font-semibold mb-1">Genicminds Tech Pvt. Ltd.</p>
                <p className="text-gray-400 text-sm">Apr 2025 - Present</p>
                <p className="text-gray-500 text-sm mt-1">
                  IT services subsidiary of Salgem Infoigy Tech Pvt. Ltd.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h5 className="font-semibold text-white mb-3">Key Responsibilities</h5>
                <ul className="space-y-2 text-gray-300">
                  <li>Architected modular enterprise applications serving 30+ users and improving workflow efficiency.</li>
                  <li>Engineered 45+ secure REST endpoints with Node.js and JWT for scalable internal access.</li>
                  <li>Delivered a production-grade HRMS platform for role-based workforce management.</li>
                  <li>Orchestrated automated data pipelines using Selenium and BeautifulSoup for structured extraction.</li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-white mb-3">Tech Stack</h5>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">React.js</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Node.js</span>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs">PostgreSQL</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs">JWT / RBAC</span>
                  <span className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs">Selenium</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">BeautifulSoup</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 p-4 rounded-2xl border border-emerald-500/30">
              <h5 className="font-bold text-emerald-400 mb-2">Impact</h5>
              <p className="text-emerald-300">
                30+ users supported | 45+ secure endpoints | production-grade HRMS delivery | automated extraction pipelines
              </p>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all hover:scale-[1.01] shadow-xl hover:shadow-2xl"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Software Developer Intern</h4>
                <p className="text-orange-400 font-semibold mb-1">Salgem Infoigy Tech Pvt. Ltd.</p>
                <p className="text-gray-400 text-sm">Sept 2024 - Mar 2025</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h5 className="font-semibold text-white mb-3">Key Responsibilities</h5>
                <ul className="space-y-2 text-gray-300">
                  <li>Implemented a real-time device monitoring system for live IoT telemetry streams.</li>
                  <li>Established secure backend services with JWT and deployment pipelines through GitHub Actions on Render.</li>
                  <li>Crafted responsive dashboards for real-time analytics and performance visualization.</li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-white mb-3">Tech Stack</h5>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">React.js</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs">Node.js</span>
                  <span className="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full text-xs">WebSockets</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">JWT</span>
                  <span className="px-3 py-1 bg-lime-500/20 text-lime-300 rounded-full text-xs">GitHub Actions</span>
                  <span className="px-3 py-1 bg-fuchsia-500/20 text-fuchsia-300 rounded-full text-xs">Render</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-4 rounded-2xl border border-orange-500/30">
              <h5 className="font-bold text-orange-400 mb-2">Impact</h5>
              <p className="text-orange-300">
                Live telemetry monitoring | secure backend services | CI/CD on Render | real-time dashboards
              </p>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
