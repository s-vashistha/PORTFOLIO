import React from "react";
import { motion as Motion } from "framer-motion";

export default function Contact() {
  const resumeUrl = `${import.meta.env.BASE_URL}Saumya_Software_Engineer_Resume.pdf`;

  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <Motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
          <p className="text-gray-300 mt-2">
            Reach out for software engineering opportunities, product collaborations, or full-stack work involving APIs, dashboards, and production systems.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-300">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Noida, India
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              m.saumya@outlook.com
            </span>
          </div>

          <form
            className="mt-6 grid sm:grid-cols-2 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const name = data.get("name");
              const email = data.get("email");
              const message = data.get("message");
              window.location.href = `mailto:m.saumya@outlook.com?subject=${encodeURIComponent(
                `Portfolio Contact from ${name}`
              )}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
            }}
          >
            <input
              name="name"
              required
              placeholder="Your name"
              className="p-3 border border-gray-600 bg-black/20 text-white rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="p-3 border border-gray-600 bg-black/20 text-white rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <textarea
              name="message"
              required
              placeholder="Message"
              rows={6}
              className="p-3 border border-gray-600 bg-black/20 text-white rounded-lg sm:col-span-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <div className="sm:col-span-2 flex gap-3 flex-wrap">
              <button type="submit" className="btn-primary">
                Send
              </button>
              <a
                href="https://github.com/saumyamishra"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>
              <a
                href={resumeUrl}
                download
                className="btn-secondary"
              >
                Resume
              </a>
            </div>
          </form>
        </Motion.div>
      </div>
    </section>
  );
}
