import React from "react";
import { motion } from "framer-motion";
import skills from "../data/skills";
import ThreeScene from "./ThreeSphere";

export default function Skills() {
  return (
    <section className="py-16">
      <div className="absolute inset-0 -z-10 opacity-30">
        <ThreeScene />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h4 className="font-semibold text-white text-xl">Technical Skills</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
