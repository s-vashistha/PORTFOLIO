import React from 'react';

export default function ThreeCaseStudy({ title, summary, challenges, solutions, tech }) {
  return (
    <section className="py-12">
      <div className="section-shell surface-panel p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-3 text-sm text-slate-300">{summary}</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <h4 className="font-semibold">Challenges</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-300">
              {challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Solutions</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-300">
              {solutions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">Tech</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
