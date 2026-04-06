import React from "react";
import { motion as Motion } from "framer-motion";
import skills from "../data/skills";
import ThreeScene from "./ThreeSphere";

export default function Skills() {
  return (
    <section id="skills" className="py-16 relative">
      <div className="absolute inset-0 -z-10 opacity-30">
        <ThreeScene />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <Motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="font-semibold text-white text-2xl mb-3">Technical Skills</h3>
          <p className="text-gray-300 mb-8">
            The stack below mirrors the tools and concepts I use across enterprise web applications, backend services, automation workflows, and deployment pipelines.
          </p>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h5 className="font-bold text-white text-lg mb-3 capitalize" style={{ color: "hsl(210, 100%, 70%)" }}>
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30 hover:bg-blue-500/30 transition"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
