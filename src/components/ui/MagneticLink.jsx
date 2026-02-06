import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { Link, NavLink} from "react-router-dom";

const MagneticLink = ({ to, children, onClick }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const location = useLocation();
  const isActive = location.pathname === to;

  useEffect(() => {
    const ctx = gsap.context(() => {}, containerRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current || !textRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.5;
    const y = (e.clientY - (top + height / 2)) * 0.5;

    // Quick follow movement
    gsap.to(textRef.current, {
      x: x,
      y: y,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    if (!textRef.current) return;

    gsap.to(textRef.current, {
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.4)", 
    });
  };

  return (
    <NavLink
      to={to}
      onClick={onClick}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative p-4 block group" 
    >
      <span
        ref={textRef}
        className={`block text-lg font-semibold uppercase transition-colors duration-300 ${
          isActive ? "text-yellow-200" : "text-white group-hover:text-yellow-100"
        }`}
      >
        {children}
      </span>
    </NavLink>
  );
};

export default MagneticLink;