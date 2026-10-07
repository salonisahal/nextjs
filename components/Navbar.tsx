"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleNavClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    setIsMenuOpen(false);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className="text-lg font-bold text-primary"
        >
          TunnelCheck
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-600 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="h-5 w-5"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <ul className="flex flex-col gap-1 border-t border-slate-200 bg-white px-6 py-3 md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="block rounded-md px-2 py-2 text-sm font-medium text-slate-600 hover:bg-surface hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
