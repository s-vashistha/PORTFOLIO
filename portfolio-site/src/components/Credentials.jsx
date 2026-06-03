import React from "react";
import { motion as Motion } from "framer-motion";

const achievements = [
  "CodeChef Silver with 250+ solved problems.",
  "Consistent LeetCode practice focused on problem solving and core CS fundamentals.",
  "Sports Captain and 2x runner-up at the AKTU Zonal Sports Fest in basketball.",
  "1st Prize winner in a Tech Innovation Competition.",
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-20">
      <div className="section-shell grid gap-5 md:grid-cols-2">
        <Motion.div
          className="surface-panel p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-black text-white">Education</h2>
          <div className="mt-6 space-y-3">
            <p className="text-lg font-bold text-white">
              Bachelor of Technology in Computer Science Engineering
            </p>
            <p className="text-teal-300">Ambalika Institute of Management and Technology</p>
            <p className="text-slate-300">2020 - 2024</p>
            <p className="text-slate-300">CGPA: 7.52</p>
          </div>
        </Motion.div>

        <Motion.div
          className="surface-panel p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="text-2xl font-black text-white">Achievements</h2>
          <ul className="mt-6 grid gap-3 text-slate-300">
            {achievements.map((achievement) => (
              <li key={achievement} className="leading-7">
                {achievement}
              </li>
            ))}
          </ul>
        </Motion.div>
      </div>
    </section>
  );
}
