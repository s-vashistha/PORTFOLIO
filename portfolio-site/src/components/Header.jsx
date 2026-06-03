import React from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#three-lab", label: "3D Lab" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const resumeUrl = `${import.meta.env.BASE_URL}Saumya_Software_Engineer_Full-Stack.pdf`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070a]/82 backdrop-blur-xl">
      <div className="section-shell flex min-h-20 flex-wrap items-center justify-between gap-5 py-3">
        <a href="#top" className="flex items-center gap-3" aria-label="Saumya Mishra home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-300/30 bg-teal-300/10 text-sm font-black text-teal-100">
            SM
          </span>
          <span>
            <span className="block text-base font-black text-white">Saumya Mishra</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Full Stack Engineer
            </span>
          </span>
        </a>

        <div className="flex flex-1 items-center justify-end gap-3">
          <nav className="hidden items-center gap-1 text-sm font-semibold text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 transition hover:bg-white/[0.07] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="https://github.com/s-vashistha"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-white/10 px-3 py-2 text-sm font-bold text-slate-200 transition hover:border-teal-300/50 hover:text-white sm:inline-flex"
          >
            GitHub
          </a>
          <a href={resumeUrl} download className="btn-primary">
            Resume
          </a>
        </div>

        <nav className="flex w-full gap-1 overflow-x-auto pb-1 text-sm font-semibold text-slate-300 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
