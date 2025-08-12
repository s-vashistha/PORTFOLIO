import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-700 mt-12">
      © {new Date().getFullYear()} Saumya Mishra — Built with React, Tailwind & Three.js
    </footer>
  );
}
