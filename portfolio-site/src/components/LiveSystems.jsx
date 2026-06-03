import React from "react";
import { motion as Motion } from "framer-motion";

const systems = [
  {
    title: "Geng India",
    url: "https://gengindia.com",
    copy: "Engineered and deployed a business website with performance-focused frontend architecture, SEO-friendly structure, and responsive behavior across devices.",
    tags: ["React Architecture", "SEO-Friendly", "Performance", "Responsive UI"],
  },
  {
    title: "KBMC Portal",
    url: "https://kbmc.gov.in",
    copy: "Delivered a government website with structured data presentation, accessibility-minded UX, and stable performance for public usage.",
    tags: ["Structured Data", "Accessibility", "High Availability", "Responsive UI"],
  },
];

export default function LiveSystems() {
  return (
    <section id="live" className="py-20">
      <div className="section-shell">
        <Motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="section-title">Live production systems.</h2>
          <p className="section-copy mt-4">
            Resume-backed live work deployed for business and public-facing usage.
          </p>
        </Motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {systems.map((system, index) => (
            <Motion.a
              key={system.title}
              href={system.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-teal-300/40 hover:bg-white/[0.08]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black text-white">{system.title}</h3>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  LIVE
                </span>
              </div>
              <p className="mt-5 text-base leading-7 text-slate-300">{system.copy}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {system.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </Motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
