import React from 'react';
import { motion } from 'framer-motion';

export default function LiveSystems() {
  return (
    <section id="live" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-white mb-8"
        >
          Live Production Systems
        </motion.h3>
        <p className="text-gray-300 text-lg mb-12">
          Deployed systems powering real organizations - scalable & secure.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.a
            href="https://gengindia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-bold">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                LIVE
              </div>
              <h4 className="text-2xl font-bold text-white">Geng India</h4>
            </div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Full-stack HRMS platform for government staffing. 
              Secure APIs, role-based dashboards, 30+ users.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">React</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Node.js</span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs">PostgreSQL</span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">JWT/RBAC</span>
            </div>
          </motion.a>

          <motion.a
            href="https://kbmc.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-bold">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                LIVE
              </div>
              <h4 className="text-2xl font-bold text-white">KBMC Portal</h4>
            </div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Government employee management system with analytics.
              Real-time dashboards, secure auth, API integrations.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs">React</span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">Python</span>
              <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs">MySQL</span>
              <span className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-xs">REST APIs</span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
