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
    <section id="credentials" className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2">
        <Motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Education
          </h3>
          <div className="space-y-3">
            <p className="text-white font-semibold text-lg">
              Bachelor of Technology in Computer Science Engineering
            </p>
            <p className="text-blue-300">
              Ambalika Institute of Management and Technology
            </p>
            <p className="text-gray-300">
              2020 - 2024
            </p>
            <p className="text-gray-300">
              CGPA: 7.52
            </p>
          </div>
        </Motion.div>

        <Motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Achievements
          </h3>
          <ul className="space-y-3 text-gray-300">
            {achievements.map((achievement) => (
              <li key={achievement} className="leading-relaxed">
                {achievement}
              </li>
            ))}
          </ul>
        </Motion.div>
      </div>
    </section>
  );
}
