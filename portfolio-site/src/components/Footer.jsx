import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
      Copyright {new Date().getFullYear()} Saumya Mishra | Built with React, Tailwind CSS, and Three.js
    </footer>
  );
}
