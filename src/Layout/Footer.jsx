import { useRef, useEffect } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaFacebookF, FaArrowUp, FaInfinity } from "react-icons/fa6"; // Added FaInfinity
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

// 1. Reusable Link Component with Expanding Underline Animation
const FooterLink = ({ text, link = "#" }) => (
  <li className="group w-fit relative overflow-hidden">
    <a
      href={link}
      className="opacity-95 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none focus-visible:text-[#C19A6B]"
    >
      {text}
    </a>
    {/* The Expanding Line */}
    <span className="absolute -bottom-0.5 left-0 w-0 h-[4px] bg-[#fffffe] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#C19A6B]"></span>
  </li>
);

const Footer = () => {
  const footerRef = useRef(null);
  const cursorRef = useRef(null);

  // 2. Logic for the Neon Brown Cursor
  useEffect(() => {
    const footer = footerRef.current;
    const cursor = cursorRef.current;

    // Only enable custom cursor logic on non-touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) return;

    const moveCursor = (e) => {
      if (footer && cursor) {
        const rect = footer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        cursor.style.transform = `translate(${x}px, ${y}px)`;
        cursor.style.opacity = ".60";
      }
    };

    const hideCursor = () => {
      if (cursor) cursor.style.opacity = "0";
    };

    if (footer) {
      footer.addEventListener("mousemove", moveCursor);
      footer.addEventListener("mouseleave", hideCursor);
    }

    return () => {
      if (footer) {
        footer.removeEventListener("mousemove", moveCursor);
        footer.removeEventListener("mouseleave", hideCursor);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="relative border-t border-gray-600 bg-theme-dark text-white w-full cursor-none" // cursor-none hides default mouse
      role="contentinfo" // ARIA role for footer
      aria-label="Site Footer"
    >
      {/* --- NEON CURSOR BLOB (Hidden on mobile/touch) --- */}
      <div
        ref={cursorRef}
        className="pointer-events-none hidden lg:block absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 rounded-full opacity-0 transition-opacity duration-300 z-0 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(160,82,45,0.15) 30%, rgba(80,40,20,0.05) 60%, transparent 70%)",
          filter: "blur(20px)",
          transform: "translate(-100%, -100%)",
        }}
        aria-hidden="true" // Decorative element, hidden from screen readers
      ></div>

      {/* --- SCROLL TO TOP BUTTON --- */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 
                   bg-white text-black p-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] 
                   hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] 
                   focus:outline-none focus:ring-4 focus:ring-[#C19A6B] 
                   transition-all duration-300 group cursor-pointer"
        aria-label="Scroll to top of page"
      >
        <FaArrowUp className="text-xl group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

      {/* Top Section: Main Content */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row border-b border-gray-400 min-h-auto lg:min-h-[50vh]">
        {/* Column 1: Contact Info */}
        <div className="w-full lg:w-[25%] border-b lg:border-b-0 lg:border-r border-gray-500 px-6 py-12 lg:p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-6xl lg:text-8xl font-bold mb-8 text-[#C19A6B]">
              CL
            </h2>
            <address className="flex flex-col gap-6 text-sm lg:text-base not-italic">
              <div className="flex gap-4 items-start">
                <span
                  className="mt-1 text-lg text-[#C19A6B]"
                  aria-hidden="true"
                >
                  <FaMapLocationDot />
                </span>
                <p>Near Railway crossing Ranopali Ayodhya, 224001</p>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-lg text-[#C19A6B]" aria-hidden="true">
                  <BsFillPhoneFill />
                </span>
                <p>
                  <a
                    href="tel:85454547546"
                    className="hover:text-[#C19A6B] transition-colors focus:outline-none focus:underline"
                  >
                    85454547546
                  </a>
                  <span className="text-xs opacity-75 block sm:inline px-1">
                    (text/call)
                  </span>
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-lg text-[#C19A6B]" aria-hidden="true">
                  <MdOutlineAlternateEmail />
                </span>
                <a
                  href="mailto:Cafe@lords.com"
                  className="hover:text-[#C19A6B] transition-colors focus:outline-none focus:underline"
                >
                  Cafe@lords.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Column 2: Quick Links & Socials */}
        <div className="w-full lg:w-[30%] border-b lg:border-b-0 lg:border-r border-gray-500 flex flex-col justify-between px-6 py-12 lg:p-8">
          <nav
            aria-label="Footer Navigation"
            className="flex flex-row justify-between w-full mb-8 lg:mb-0"
          >
            {/* Quick Links */}
            <div className="w-1/2 flex flex-col gap-3">
              <h3 className="font-semibold mb-2 tracking-wider text-[#C19A6B]">
                QUICK LINKS
              </h3>
              <ul className="flex flex-col gap-2 text-sm lg:text-base">
                <FooterLink text="Shop All" />
                <FooterLink text="Today's Choice" />
                <FooterLink text="Coffee" />
                <FooterLink text="Snacks" />
                <FooterLink text="My Account" />
                <FooterLink text="About Us" />
                <FooterLink text="Contact Us" />
              </ul>
            </div>

            {/* Information */}
            <div className="w-1/2 flex flex-col gap-3">
              <h3 className="font-semibold mb-2 tracking-wider text-[#C19A6B]">
                INFORMATION
              </h3>
              <ul className="flex flex-col gap-2 text-sm lg:text-base">
                <FooterLink text="FAQ's" />
                <FooterLink text="Rewards" />
                <FooterLink text="Community" />
              </ul>
            </div>
          </nav>

          {/* Social Icons */}
          <div className="w-full flex justify-start lg:justify-end gap-3 mt-4 lg:mt-0">
            {[
              {
                icon: <FaFacebookF />,
                link: "https://instagram.com/abdulkalam_011",
                label: "Facebook",
              },
              { icon: <RiInstagramFill />, link: "#", label: "Instagram" },
              { icon: <FaYoutube />, link: "#", label: "YouTube" },
              { icon: <FaXTwitter />, link: "#", label: "X (Twitter)" },
            ].map((social, index) => (
              <a
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                href={social.link}
                aria-label={social.label}
                className="w-10 h-10 lg:w-14 lg:h-14 border border-gray-500 rounded-full flex items-center justify-center text-lg lg:text-2xl 
                           hover:border-[#C19A6B] hover:text-[#C19A6B] hover:shadow-[0_0_15px_rgba(193,154,107,0.3)] 
                           focus:outline-none focus:ring-2 focus:ring-[#C19A6B]
                           transition-all duration-300 cursor-pointer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 3: Newsletter */}
        <div className="w-full lg:w-[45%] px-6 py-12 lg:p-10 flex flex-col justify-between">
          <div className="mb-10 lg:mb-0">
            <h3 className="text-3xl lg:text-4xl font-light mb-2 flex items-center flex-wrap gap-1">
              Stay in the l
              <span className="inline-flex items-center text-[#C19A6B] animate-pulse">
                <FaInfinity className="text-4xl lg:text-5xl translate-y-1" />
              </span>
              p
            </h3>
            <p className="text-lg opacity-75">
              Stay updated with our new recipes to try.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="border-b border-gray-400 w-full flex flex-col sm:flex-row justify-between items-start sm:items-end pb-2 gap-4 hover:border-[#C19A6B] transition-colors duration-300">
              <label htmlFor="newsletter-email" className="sr-only">
                Email Address
              </label>
              <input
                id="newsletter-email"
                className="w-full sm:w-[60%] bg-transparent outline-none placeholder-gray-400 py-2 cursor-text z-20 focus:placeholder-white transition-colors"
                type="email"
                placeholder="EMAIL ADDRESS"
                required
              />
              <button
                type="submit"
                className="flex items-center gap-2 font-semibold hover:text-[#C19A6B] focus:text-[#C19A6B] focus:outline-none transition-colors whitespace-nowrap cursor-pointer z-20"
              >
                SIGN ME UP
                <span className="text-xl" aria-hidden="true">
                  <MdArrowOutward />
                </span>
              </button>
            </div>
          </form>

          <div className="w-full mt-6">
            <p className="text-xs lg:text-sm text-justify opacity-60 leading-relaxed">
              <span className="font-bold text-white">DISCLAIMER: </span>
              Our beverages and food items are prepared in a common kitchen that
              handles nuts, dairy, wheat, soy, and eggs. While we take strict
              precautions to minimize cross-contamination, we cannot guarantee
              that any menu item is completely allergen-free. Customers with
              severe allergies should exercise caution and inform our staff
              before ordering.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright & Giant Logo */}
      <div className="relative z-10 w-full overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 text-xs opacity-50">
          <p>&copy; 2025 cafelords. Designed and developed by Abdul.</p>
          <p className="hidden sm:block">All rights reserved.</p>
        </div>

        <h1
          className="w-full text-center font-bold leading-none tracking-tighter
             text-[15vw] xl:text-[200px] 2xl:text-[250px]
             select-none pointer-events-none pb-4 lg:pb-0 text-[#C19A6B]/20"
          aria-hidden="true" // Hidden from reader because title CL is already read at top
        >
          CAFELORDS
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
