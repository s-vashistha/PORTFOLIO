import React from "react";
import { motion as Motion } from "framer-motion";

const roles = [
  {
    title: "Software Engineer",
    company: "Genicminds Tech Pvt. Ltd.",
    date: "Apr 2025 - Present",
    note: "IT services subsidiary of Salgem Infoigy Tech Pvt. Ltd.",
    accent: "text-teal-300",
    responsibilities: [
      "Architected modular enterprise applications serving 30+ users and improving workflow efficiency.",
      "Engineered 45+ secure REST endpoints with Node.js and JWT for scalable internal access.",
      "Delivered a production-grade HRMS platform for role-based workforce management.",
      "Orchestrated automated data pipelines using Selenium and BeautifulSoup for structured extraction.",
    ],
    stack: ["React.js", "Node.js", "PostgreSQL", "JWT / RBAC", "Selenium", "BeautifulSoup"],
    impact: "30+ users supported | 45+ secure endpoints | production-grade HRMS delivery | automated extraction pipelines",
  },
  {
    title: "Software Developer Intern",
    company: "Salgem Infoigy Tech Pvt. Ltd.",
    date: "Sept 2024 - Mar 2025",
    accent: "text-amber-300",
    responsibilities: [
      "Implemented a real-time device monitoring system for live IoT telemetry streams.",
      "Established secure backend services with JWT and deployment pipelines through GitHub Actions on Render.",
      "Crafted responsive dashboards for real-time analytics and performance visualization.",
    ],
    stack: ["React.js", "Node.js", "WebSockets", "JWT", "GitHub Actions", "Render"],
    impact: "Live telemetry monitoring | secure backend services | CI/CD on Render | real-time dashboards",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="section-shell">
        <Motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="section-title">Professional experience.</h2>
          <p className="section-copy mt-4">
            Recent work focused on secure business platforms, live telemetry, automation, and deployment-ready engineering.
          </p>
        </Motion.div>

        <div className="mt-10 grid gap-5">
          {roles.map((role, index) => (
            <Motion.article
              key={`${role.company}-${role.date}`}
              className="surface-panel p-6 sm:p-8"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                <div>
                  <p className={`text-sm font-black uppercase tracking-[0.16em] ${role.accent}`}>
                    {role.date}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-white">{role.title}</h3>
                  <p className="mt-1 text-lg font-bold text-slate-200">{role.company}</p>
                  {role.note && <p className="mt-1 text-sm text-slate-400">{role.note}</p>}
                </div>
                <p className="max-w-md rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm font-bold leading-6 text-emerald-100">
                  {role.impact}
                </p>
              </div>

              <div className="mt-7 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <h4 className="font-black text-white">Ownership</h4>
                  <ul className="mt-3 grid gap-3 text-slate-300 sm:grid-cols-2">
                    {role.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="leading-7">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-black text-white">Stack</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {role.stack.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
