import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import gsap from "gsap";
import LoginButton from "../components/Auth/LoginButton";
import AccountNav from "../components/Auth/AccountNav";
import MagneticLink from "../components/ui/MagneticLink";
import Search from "../components/ui/Search";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power3.out" },
      );
      gsap.fromTo(
        ".mobile-link",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2 },
      );
    }
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="h-[10vh] flex justify-between items-center py-4 px-4 md:px-10 shadow-md bg-theme-dark sticky top-0 z-[99990] gap-4">
      {/* 1. Logo Section */}
      <div className="relative z-[99992] flex-shrink-0 border-0">
        <Link
          to="/"
          className="flex gap-2 items-center hover:scale-105 transition-transform"
        >
          <img
            className="w-10 h-10 md:w-16 md:h-16 rounded-full md:scale-125   transition-all"
            src="/images/logo.png"
            alt="Logo"
          />
          {/* Text is hidden on mobile to make room for Search */}
          <h1 className="hidden md:block text-md md:text-xl font-bold text-white ">
            CafeLords
          </h1>
        </Link>
      </div>

      <div className="flex-1 max-w-lg mx-2 z-[99992]">
        <Search />
      </div>

      <div className="hidden md:flex items-center gap-4 lg:gap-8 flex-shrink-0">
        <nav className="flex gap-4 lg:gap-8 items-center">
          <MagneticLink to="/">Home</MagneticLink>
          <MagneticLink to="/menu">Menu</MagneticLink>
          <MagneticLink to="/about">About Us</MagneticLink>
        </nav>

        <div>
          {isAuthenticated ? (
            <AccountNav />
          ) : (
            <div className="hover:scale-105 transition-transform">
              <LoginButton />
            </div>
          )}
        </div>
      </div>

      {/* 4. Mobile Menu Toggle Button (Visible on Mobile) */}
      <div className="md:hidden z-[99992] flex-shrink-0">
        <button
          onClick={toggleMenu}
          className="text-white text-3xl focus:outline-none flex items-center"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* 5. Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 bg-theme-dark z-[99991] flex flex-col items-center justify-center gap-8 md:hidden h-screen w-full"
        >
          <div className="flex flex-col items-center gap-6 mobile-link">
            <MagneticLink to="/" onClick={toggleMenu}>
              Home
            </MagneticLink>
            <MagneticLink to="/menu" onClick={toggleMenu}>
              Menu
            </MagneticLink>
            <MagneticLink to="/about" onClick={toggleMenu}>
              About Us
            </MagneticLink>
          </div>

          <div className="mt-8 mobile-link" onClick={toggleMenu}>
            {isAuthenticated ? <AccountNav /> : <LoginButton />}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
