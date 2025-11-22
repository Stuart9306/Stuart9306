import { useState } from "react";
import Navigation from "./Navigation";
import Button from "../common/Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-light/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent" />
          <span className="font-semibold text-lg text-dark">
            Spontaneous <span className="text-primary">Carwash</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <Navigation />

        {/* CTA button (hidden on mobile) */}
        <div className="hidden md:block">
          <Button variant="primary">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-dark focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <Navigation mobile onLinkClick={() => setMenuOpen(false)} />
          <div className="px-6 py-4">
            <Button variant="primary" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;