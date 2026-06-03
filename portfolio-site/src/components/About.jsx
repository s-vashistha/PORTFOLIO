import React from "react";
import { motion as Motion } from "framer-motion";

const focusAreas = ["Secure APIs", "Real-time Systems", "Database Design", "Clean Architecture"];

export default function About() {
  const profileUrl = `${import.meta.env.BASE_URL}profile.jpeg`;
  const responsibilities = [
    "Architecting scalable backend systems with secure REST APIs and role-based access control.",
    "Designing database schemas and optimization strategies for production workloads.",
    "Building modular React frontends and Node.js services that support complex workflows.",
    "Establishing CI/CD pipelines and deployment strategies for reliable production releases.",
    "Creating real-time dashboards and monitoring systems for visibility and analytics.",
    "Automating data workflows with web scraping, ETL pipelines, and batch processing.",
  ];

  return (
    <section id="about" className="py-20">
      {/* <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"> */}
        <div className="section-shell">
        {/* <Motion.div
          className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.055]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={profileUrl}
            alt="Saumya Mishra"
            className="aspect-[4/5] h-full min-h-[420px] w-full object-cover"
          />
        </Motion.div> */}

        {/* <Motion.div
          className="surface-panel p-6 sm:p-8" */}
        <Motion.div
          className="surface-panel p-6 sm:p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <h2 className="section-title">Building systems that work at scale.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            I design and build full-stack systems with a focus on maintainability, security, and real-world impact.
            My work spans from enterprise platforms and secure backend services to real-time monitoring systems
            and automation workflows that solve tangible business problems.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Across 1.8+ years in production engineering, I've delivered HRMS platforms serving 30+ users, architected secure REST APIs,
            built responsive dashboards for live telemetry, and created automation utilities that improve operational efficiency.
            Every project is approached with production readiness, clean architecture, and user-focused design.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span key={area} className="chip">
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-7">
            <h3 className="text-xl font-black text-white">What I usually own</h3>
            <ul className="mt-5 grid gap-4 text-slate-300 md:grid-cols-2">
            {responsibilities.map((responsibility) => (
              <li key={responsibility} className="leading-7">
                {responsibility}
              </li>
            ))}
            </ul>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
