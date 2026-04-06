import React from "react";

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto p-6 flex items-center justify-between gap-6 flex-wrap">
      <div className="flex items-center gap-3">
        <img
          src="/profile.jpg"
          alt="Saumya"
          className="w-14 h-14 rounded-full border-2 border-white/20 hover:rotate-12 transition-transform duration-500 ease-in-out"
        />
        <div>
          <h1 className="text-xl font-bold">Saumya Mishra</h1>
          <p className="text-sm text-gray-400">Full Stack Software Engineer</p>
        </div>
      </div>
      <nav className="text-sm text-gray-300 flex items-center gap-4 flex-wrap justify-end">
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#skills" className="hover:text-white transition">Skills</a>
        <a href="#experience" className="hover:text-white transition">Experience</a>
        <a href="#live" className="hover:text-white transition">Live Work</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#credentials" className="hover:text-white transition">Credentials</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
        <a href="https://github.com/saumyamishra" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
      </nav>
    </header>
  );
}
