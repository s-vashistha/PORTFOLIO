import React from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-white"
        >
          Selected Work
        </motion.h3>
        <p className="text-gray-300 mt-2">
          A selection of projects showcasing my engineering approach.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl p-5 bg-white/10 backdrop-blur-lg border border-gray-700 shadow-md hover:shadow-xl hover:scale-[1.02] transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-semibold text-lg text-white">{p.title}</h4>
              <p className="mt-2 text-sm text-gray-300">{p.description}</p>
              <div className="mt-3 flex gap-2 flex-wrap text-xs">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
