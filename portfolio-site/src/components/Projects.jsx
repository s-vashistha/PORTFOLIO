import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import projects from "../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20">
      <div className="section-shell">
        <Motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="section-title">Production case studies.</h2>
          <p className="section-copy mt-4">
            Core systems and internal products aligned with the responsibilities listed in my resume.
            Each card opens into the architecture, challenge, and ownership details.
          </p>
        </Motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Motion.button
              key={project.id}
              type="button"
              className="group flex min-h-[330px] flex-col rounded-lg border border-white/10 bg-white/[0.055] p-5 text-left shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-teal-300/40 hover:bg-white/[0.08]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              onClick={() => setSelectedProject(project)}
            >
              <span className="text-sm font-black text-teal-300">0{index + 1}</span>
              <h3 className="mt-4 text-2xl font-black leading-tight text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-auto border-t border-white/10 pt-5 text-sm font-bold leading-6 text-emerald-300">
                {project.impact}
              </p>
            </Motion.button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[86vh] w-full max-w-3xl overflow-auto rounded-lg border border-white/10 bg-[#0b1016] p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-300">Case study</p>
                <h2 id="project-dialog-title" className="mt-2 text-3xl font-black text-white">
                  {selectedProject.title}
                </h2>
              </div>
              <button
                type="button"
                className="rounded-lg border border-white/10 px-3 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>

            <p className="mt-5 text-lg leading-8 text-slate-300">{selectedProject.description}</p>

            <div className="mt-7 grid gap-5">
              <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-4">
                <h3 className="font-black text-emerald-200">Impact</h3>
                <p className="mt-2 text-emerald-100">{selectedProject.impact}</p>
              </div>
              <div>
                <h3 className="font-black text-white">Architecture</h3>
                <p className="mt-2 leading-7 text-slate-300">{selectedProject.architecture}</p>
              </div>
              <div>
                <h3 className="font-black text-white">Challenge</h3>
                <p className="mt-2 leading-7 text-amber-200">{selectedProject.challenge}</p>
              </div>
              <div>
                <h3 className="font-black text-white">Responsibilities</h3>
                <ul className="mt-3 grid gap-3 text-slate-300 sm:grid-cols-2">
                  {selectedProject.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="leading-7">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {(selectedProject.demo || selectedProject.github) && (
              <div className="mt-7 flex flex-wrap gap-3">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    Live Demo
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
