import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LiveSystems from "./components/LiveSystems";
import Experience from "./components/Experience";
import Credentials from "./components/Credentials";

const ThreeShowcase = lazy(() => import("./components/ThreeShowcase"));

export default function App() {
  return (
    <div className="site-shell min-h-screen text-slate-100 antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Suspense
          fallback={
            <section id="three-lab" className="py-20">
              <div className="section-shell">
                <div className="h-[420px] rounded-lg border border-white/10 bg-white/[0.045]" />
              </div>
            </section>
          }
        >
          <ThreeShowcase />
        </Suspense>
        <Experience />
        <LiveSystems />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
