import React from "react";
import { motion as Motion } from "framer-motion";

const contactDetails = ["Noida, India", "m.saumya@outlook.com"];

export default function Contact() {
  const resumeUrl = `${import.meta.env.BASE_URL}Saumya_Software_Engineer_Full-Stack.pdf`;

  return (
    <section id="contact" className="py-20">
      <div className="section-shell">
        <Motion.div
          className="surface-panel grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.86fr_1.14fr]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h2 className="section-title">Let&apos;s connect.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Reach out for full-stack engineering opportunities, backend architecture collaborations,
              or production work involving secure APIs, real-time systems, and scalable platforms.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {contactDetails.map((detail) => (
                <span key={detail} className="chip">
                  {detail}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://github.com/s-vashistha"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>
              <a href={resumeUrl} download className="btn-secondary">
                Resume
              </a>
            </div>
          </div>

          <form
            className="grid gap-4 sm:grid-cols-2"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const name = data.get("name");
              const email = data.get("email");
              const message = data.get("message");
              window.location.href = `mailto:m.saumya@outlook.com?subject=${encodeURIComponent(
                `Portfolio Contact from ${name}`
              )}&body=${encodeURIComponent(`${message}\n\nFrom: ${email}`)}`;
            }}
          >
            <input
              name="name"
              required
              placeholder="Your name"
              className="min-h-12 rounded-lg border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/30"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="min-h-12 rounded-lg border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/30"
            />
            <textarea
              name="message"
              required
              placeholder="Message"
              rows={7}
              className="rounded-lg border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/30 sm:col-span-2"
            />
            <button type="submit" className="btn-primary sm:col-span-2">
              Send Message
            </button>
          </form>
        </Motion.div>
      </div>
    </section>
  );
}
