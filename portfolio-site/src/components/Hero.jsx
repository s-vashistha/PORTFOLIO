import React, { Suspense, lazy } from "react";
import { motion as Motion } from "framer-motion";

const ThreeLaptop = lazy(() => import("./ThreeLaptop"));

const highlights = [
  { value: "45+", label: "secure REST endpoints" },
  { value: "30+", label: "production users supported" },
  { value: "1.8+", label: "years building software" },
];

const canvasNotes = ["GLTF model", "Pointer rig", "Lighting pass", "Orbit controls"];

export default function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}Saumya_Software_Engineer_Full-Stack.pdf`;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="section-shell grid min-h-[calc(100vh-80px)] items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Saumya Mishra
            <span className="gradient-text mt-3 block text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Full-stack engineer building production systems.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I build scalable MERN platforms, secure APIs, real-time dashboards,
            and automation workflows with production deployment in mind.
          </p>
          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-4"
              >
                <span className="block text-2xl font-black text-white">{item.value}</span>
                <span className="mt-1 block text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-slate-400">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={resumeUrl} download className="btn-primary">
              Download Resume
            </a>
            <a href="#three-lab" className="btn-secondary">
              Interactive Lab
            </a>
            <a href="#projects" className="btn-secondary">
              Case Studies
            </a>
          </div>
        </Motion.div>

        <Motion.div
          className="relative min-h-[420px] w-full lg:min-h-[640px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="absolute inset-0">
            <Suspense fallback={<div className="h-full w-full" />}>
              <ThreeLaptop />
            </Suspense>
          </div>
          <div className="pointer-events-none absolute bottom-6 left-0 right-0 mx-auto grid max-w-md grid-cols-2 gap-2 px-4 sm:grid-cols-4">
            {canvasNotes.map((note) => (
              <span
                key={note}
                className="rounded-lg border border-white/10 bg-black/35 px-3 py-2 text-center text-xs font-bold text-slate-200 backdrop-blur-md"
              >
                {note}
              </span>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
