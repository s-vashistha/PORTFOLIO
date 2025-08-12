import React from "react";

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/profile.jpg"
          alt="Saumya"
          className="w-14 h-14 rounded-full border-2 border-white/20 hover:rotate-12 transition-transform duration-500 ease-in-out"
        />
        <div>
          <h1 className="text-xl font-bold">Saumya Mishra</h1>
          <p className="text-sm text-gray-400">
            Full-stack Developer
          </p>
        </div>
      </div>
      <nav className="space-x-4 text-sm text-gray-300">
        <a href="#projects" className="hover:text-white transition">Work</a>
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </nav>
    </header>
  );
}
