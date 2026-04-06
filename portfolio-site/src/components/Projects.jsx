import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import projects from "../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <Motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-white mb-4"
        >
          Production Projects
        </Motion.h3>
        <p className="text-gray-300 mb-8 text-lg">
          Core systems and internal products aligned with the responsibilities listed in my resume.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Motion.div
              key={project.id}
              className="block rounded-2xl p-5 bg-white/10 backdrop-blur-lg border border-gray-700 shadow-md hover:shadow-xl hover:scale-[1.02] transition cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <h4 className="font-semibold text-lg text-white">{project.title}</h4>
              <p className="mt-2 text-sm text-gray-300">{project.description}</p>
              <div className="mt-3 flex gap-2 flex-wrap text-xs">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-emerald-400 font-semibold">{project.impact}</p>
            </Motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-3xl p-8 max-w-2xl max-h-[80vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="float-right text-sm font-semibold text-gray-400 hover:text-white mb-4 px-3 py-2 rounded-full hover:bg-white/10"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
            <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
            <p className="text-gray-300 mb-6 text-lg">{selectedProject.description}</p>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-bold text-white mb-2">Impact</h4>
                <p className="text-emerald-400 font-semibold">{selectedProject.impact}</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Architecture</h4>
                <p className="text-gray-300">{selectedProject.architecture}</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Challenge</h4>
                <p className="text-yellow-300">{selectedProject.challenge}</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Responsibilities</h4>
                <ul className="space-y-2 text-gray-300">
                  {selectedProject.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>

            {(selectedProject.demo || selectedProject.github) && (
              <div className="flex gap-4">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-green-600 text-white py-3 px-6 rounded-xl font-bold text-center hover:bg-green-500 transition"
                  >
                    Live Demo
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 border border-white/50 text-white py-3 px-6 rounded-xl font-bold text-center hover:bg-white/10 transition"
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
