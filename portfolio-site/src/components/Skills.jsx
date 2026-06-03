import React, { Suspense, lazy } from "react";
import { motion as Motion } from "framer-motion";
import skills from "../data/skills";

const ThreeScene = lazy(() => import("./ThreeSphere"));

function formatCategory(category) {
  return category.replace(/([A-Z])/g, " $1").replace(/^./, (value) => value.toUpperCase()).trim();
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background 3D Sphere */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <Suspense fallback={null}>
          <ThreeScene />
        </Suspense>
      </div>

      <div className="section-shell relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="section-title">Production-grade engineering stack.</h2>
          <p className="section-copy mt-5">
            Technologies and practices for building secure, scalable systems: from backend APIs and databases
            to responsive frontends, real-time systems, and deployment pipelines. Each tool chosen for stability and production readiness.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="surface-panel p-5">
                <h3 className="text-lg font-black text-white">
                  {formatCategory(category)}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="chip"
                    >
                      {skill}
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
