import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LiveSystems from "./components/LiveSystems";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0f1f] to-blue-900 text-gray-100 antialiased">
      <Header />
      <main className="max-w-6xl mx-auto px-6 space-y-24">
        <Hero />
        <About />
        <Skills />
        <LiveSystems />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
