import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
          <p className="text-gray-300 mt-2">
            Reach out for collaborations, opportunities, or just to say hello.
          </p>

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
            <div className="sm:col-span-2 flex gap-3">
              <button type="submit" className="btn-primary">
                Send
              </button>
              <a
                href="/Saumya_Software_Engineer_Resume.pdf"
                download
                className="btn-secondary"
              >
                Resume
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
