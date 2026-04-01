import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-white mb-12"
        >
          Professional Experience
        </motion.h3>
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all hover:scale-[1.01] shadow-xl hover:shadow-2xl"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Full Stack Developer</h4>
                <p className="text-blue-400 font-semibold mb-1">Genicminds Technologies</p>
                <p className="text-gray-400 text-sm">2023 - Present (1.7 years)</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h5 className="font-semibold text-white mb-3">Key Projects</h5>
                <ul className="space-y-2 text-gray-300">
                  <li>• HRMS Portal for govt (gengindia.com) - 30+ users</li>
                  <li>• IoT Device Health Dashboard - WebSockets, 45% downtime reduction</li>
                  <li>• ERP Systems for enterprise - multi-tenant APIs</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-3">Tech Stack</h5>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Node</span>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs">PostgreSQL</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs">WebSockets</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 p-4 rounded-2xl border border-emerald-500/30">
              <h5 className="font-bold text-emerald-400 mb-2">Impact Metrics</h5>
              <p className="text-emerald-300">Deployed 3 production systems | 25+ APIs | 30+ concurrent users | 99.9% uptime</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all hover:scale-[1.01] shadow-xl hover:shadow-2xl"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Backend Developer</h4>
                <p className="text-orange-400 font-semibold mb-1">Salgem Infotech</p>
                <p className="text-gray-400 text-sm">2022 - 2023</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h5 className="font-semibold text-white mb-3">Key Projects</h5>
                <ul className="space-y-2 text-gray-300">
                  <li>• Government ERP backend - Python/MySQL</li>
                  <li>• E-commerce platform - payment integration</li>
                  <li>• Analytics dashboards - Chart.js</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-3">Tech Stack</h5>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">Python</span>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs">MySQL</span>
                  <span className="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full text-xs">PHP</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Chart.js</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-4 rounded-2xl border border-orange-500/30">
              <h5 className="font-bold text-orange-400 mb-2">Impact Metrics</h5>
              <p className="text-orange-300">Built 5+ backend APIs | Payment systems live | 500+ daily transactions processed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
