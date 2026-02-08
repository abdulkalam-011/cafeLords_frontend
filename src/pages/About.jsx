import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPeopleGroup, FaArrowRight } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";
import { IoStorefrontSharp } from "react-icons/io5";
import { MdReviews, MdOutlineVerifiedUser } from "react-icons/md";
// Importing icons for sections
import { GiCarrot, GiCookingPot } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaMobileScreenButton } from "react-icons/fa6";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// --- Reusable Components ---

const GlassCard = ({ children, className = "" }) => (
  <div
    className={`glass-card bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl hover:bg-white/80 ${className}`}
  >
    {children}
  </div>
);

const SectionHeading = ({ sub, title, align = "left" }) => (
  <div className={`mb-6 ${align === "center" ? "text-center" : "text-left"}`}>
    <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-2 font-sans">
      {sub}
    </h4>
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-lavish">
      {title}
    </h2>
    {align === "center" && (
      <div className="h-1 w-24 bg-yellow-400 mt-4 rounded-full mx-auto"></div>
    )}
  </div>
);

const About = () => {
  const navigate = useNavigate();
  const container = useRef();

  // --- GSAP ANIMATIONS ---
  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // 1. Hero Animation
        const tl = gsap.timeline();
        tl.from(".hero-blob", {
          scale: 0,
          opacity: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
        })
          .from(
            ".hero-title",
            { y: 100, opacity: 0, duration: 1, ease: "power4.out" },
            "-=1"
          )
          .from(".hero-sub", { y: 50, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(".hero-btn", { scale: 0.8, opacity: 0, duration: 0.5 }, "-=0.4")
          .from(
            ".hero-img",
            { x: 100, opacity: 0, duration: 1, rotate: 5 },
            "-=0.8"
          );

        // 2. Stats Section
        gsap.from(".stat-card", {
          scrollTrigger: { trigger: ".stats-section", start: "top 80%" },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
        });

        // 3. Story Section
        gsap.from(".story-content", {
          scrollTrigger: { trigger: ".story-section", start: "top 75%" },
          x: -50,
          opacity: 0,
          duration: 1,
        });
        gsap.from(".story-img", {
          scrollTrigger: { trigger: ".story-section", start: "top 75%" },
          x: 50,
          opacity: 0,
          duration: 1,
        });

        // 4. Why Choose Us Animation
        gsap.from(".why-img-main", {
          scrollTrigger: { trigger: ".why-us-section", start: "top 75%" },
          scale: 0.9,
          opacity: 0,
          duration: 1,
        });
        gsap.from(".why-img-overlay", {
          scrollTrigger: { trigger: ".why-us-section", start: "top 75%" },
          scale: 0,
          opacity: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "back.out(1.7)",
        });
        gsap.from(".why-feature-card", {
          scrollTrigger: { trigger: ".why-us-section", start: "top 80%" },
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
        });

        // 5. Our Features (New Section) Animation
        gsap.from(".feature-content", {
          scrollTrigger: { trigger: ".features-section", start: "top 75%" },
          x: -30,
          opacity: 0,
          duration: 0.8,
        });
        gsap.from(".feature-item", {
          scrollTrigger: { trigger: ".features-section", start: "top 75%" },
          x: -20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.3,
        });
        gsap.from(".feature-card-container", {
          scrollTrigger: { trigger: ".features-section", start: "top 75%" },
          scale: 0.8,
          opacity: 0,
          rotation: 5,
          duration: 1,
          ease: "elastic.out(1, 0.7)",
        });

        // 6. Team Section
        gsap.from(".team-card", {
          scrollTrigger: { trigger: ".team-section", start: "top 85%" },
          y: 100,
          opacity: 0,
          rotationX: -15,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        });
      }, container);
      return () => ctx.revert();
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative w-full overflow-hidden bg-gray-50 text-gray-800 font-sans selection:bg-yellow-200"
    >
      {/* Background Blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="hero-blob absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse-slow"></div>
        <div className="hero-blob absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-pulse-slow delay-1000"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center px-6 lg:px-20 pt-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 z-10">
            <h1 className="hero-title text-5xl md:text-7xl font-bold font-lavish leading-[1.1] mb-6">
              Sip the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                Extraordinary
              </span>{" "}
              <br />
              Taste the Love.
            </h1>
            <p className="hero-sub text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              From our clean-focused storage to your table, we deliver fresh,
              hand-crafted beverages that redefine your daily ritual.
            </p>
            <div className="hero-btn flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/menu")}
                className="group relative px-8 py-4 bg-gray-900 text-white text-lg font-bold rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Order Now <FaArrowRight />
                </span>
                <div className="absolute inset-0 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
              </button>
            </div>
          </div>
          <div className="hero-img w-full lg:w-1/2 relative flex justify-center">
            <div className="relative w-[300px] md:w-[450px] aspect-[4/5]">
              <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-[3rem] -rotate-6 scale-105 border border-white/40"></div>
              <img
                src="images/imckdh.jpeg"
                alt="Coffee Art"
                className="relative z-10 w-full h-full object-cover rounded-[2.5rem] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="stats-section py-20 px-6 lg:px-20">
        <GlassCard className="container mx-auto p-10 lg:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                icon: <FaPeopleGroup />,
                num: "100K+",
                label: "Happy Customers",
              },
              { icon: <SiCodechef />, num: "1000+", label: "Expert Chefs" },
              { icon: <IoStorefrontSharp />, num: "50+", label: "Locations" },
              { icon: <MdReviews />, num: "4.9", label: "Average Rating" },
            ].map((stat, i) => (
              <div
                key={i}
                className="stat-card flex flex-col items-center text-center gap-2 group cursor-pointer"
              >
                <span className="text-5xl text-yellow-500 mb-2 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                  {stat.icon}
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
                  {stat.num}
                </h3>
                <p className="text-gray-500 font-medium uppercase text-sm tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* --- STORY SECTION --- */}
      <section className="story-section py-20 px-6 lg:px-20 relative">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="story-content w-full lg:w-1/2">
            <SectionHeading
              sub="Our Heritage"
              title="Brewed with Passion, Served with Pride."
            />
            <p className="text-lg text-gray-600 mb-6 text-justify leading-relaxed">
              It all started with a rainy afternoon in Melbourne and a cup of
              coffee so good it changed everything. I knew right then I wanted
              to bring that same passion for quality and community back home to
              Ayodhya. After a year of searching for the perfect space and
              countless late nights perfecting our recipes, Cafelords opened its
              doors in 2023. From day one, our mission has been simple: to
              create a warm, welcoming space where every cup tells a story.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden">
                <img
                  src="https://ui-avatars.com/api/?name=Abdul+Kalam&background=random"
                  alt="Founder"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900 font-lavish text-xl">
                  Abdul Kalam
                </p>
                <p className="text-sm text-yellow-600 uppercase tracking-widest">
                  Founder
                </p>
              </div>
            </div>
          </div>
          <div className="story-img w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-400 rounded-[2rem] rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-20"></div>
              <img
               src="/images/about-us/image.png"
               alt="Our Cafe"
                className="relative rounded-[2rem] shadow-2xl border-4 border-white w-full object-cover bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US (Image Match) --- */}
      <section className="why-us-section py-20 px-6 lg:px-20 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Image Composition */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
            <div className="relative w-full">
              <img
                src="/images/our-story.png"
                alt="Chef Preparing Food"
                className="why-img-main w-full object-cover rounded-[2.5rem] shadow-lg"
              />
            </div>
          </div>

          {/* Right: Text and Feature Grid */}
          <div className="w-full lg:w-1/2 pt-10 lg:pt-0">
            <SectionHeading sub="WHY CHOOSE US" title="Why we are the best" />

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Beyond home and work, we’ve created a welcoming space for you to
              connect, create, or simply unwind. With cozy seating, free Wi-Fi,
              and a warm smile, we're your home away from home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <GiCarrot />, text: "Fresh Food" },
                { icon: <GiCookingPot />, text: "Clean kitchen" },
                { icon: <RiCustomerService2Fill />, text: "24/7 Services" },
                { icon: <FaMobileScreenButton />, text: "Order Online" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="why-feature-card bg-[#FFF9C4] p-4 rounded-xl flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="bg-white p-2 rounded-full text-yellow-600 text-2xl">
                    {item.icon}
                  </div>
                  <span className="font-bold text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR FEATURES SECTION (Added Back) --- */}
      <section className="features-section py-20 px-6 lg:px-20 relative overflow-hidden">
        {/* Decorative background for this section */}
        <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-100/50 -z-10"></div>

        <GlassCard className="container mx-auto p-8 lg:p-16 relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-300/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className="feature-content w-full lg:w-1/2 space-y-8">
              <div>
                <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">
                  Our Features
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Experience Digital Convenience
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Skip the queues, customize every detail, and enjoy exclusive
                perks that make your daily coffee ritual effortless and
                rewarding.
              </p>

              <ul className="space-y-5">
                {[
                  "⚡ Express Pickup Ready in Minutes",
                  "🎁 Members Save 15% on Every Online Order",
                  "📱 One-Click Reorder Your Favorites",
                  "📍 Real-Time Notifications When Order is Ready",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="feature-item flex items-center gap-3 text-gray-700 font-medium text-lg"
                  >
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate("/menu")}
                className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300"
              >
                CHECK MENU
              </button>
            </div>

            {/* Right: Feature Card / Graphic */}
            <div className="feature-card-container w-full lg:w-1/2">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-xl"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="text-6xl mb-6 bg-white/20 p-6 rounded-full backdrop-blur-md">
                    <FaMobileScreenButton />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Order on the Go</h3>
                  <p className="opacity-90 mb-8 text-lg">
                    Download our app or use the website to pre-order. Your
                    coffee will be waiting for you, hot and ready.
                  </p>
                  <div className="flex gap-4">
                    <div className="h-3 w-24 bg-white/30 rounded-full"></div>
                    <div className="h-3 w-12 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="team-section py-24 px-6 lg:px-20 mb-10">
        <div className="container mx-auto">
          <SectionHeading
            sub="The Dream Team"
            title="Meet the Masters"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Pradeep Singh",
                role: "Head Chef",
                image:
                  "https://imgs.search.brave.com/H3NV7HcvJKlTQoXSkSdQncKjq2DCwJr6Y8iB28WzHTg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9waG90by1wcm9m/ZXNzaW9uYWwtY2hl/Zl84ODkyMjctMzgy/MjIuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw",
              },
              {
                name: "Amandeep Bhatia",
                role: "Mixologist",
                image:
                  "https://imgs.search.brave.com/LLSl5aw8OWQvgl9RQCMlAe6R2eHgt3mT54hr3D_3xHI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vZG9sZ2FjaG92/L2RvbGdhY2hvdjE5/MDMvZG9sZ2FjaG92/MTkwMzAyMjY5LzEx/OTU2NTU5Mi1jb29r/aW5nLXByb2Zlc3Np/b24tYW5kLXBlb3Bs/ZS1jb25jZXB0LWhh/cHB5LW1hbGUtaW5k/aWFuLWNoZWYtaW4t/dG9xdWUtb3Zlci1n/cmV5LWJhY2tncm91/bmQuanBnP3Zlcj02",
              },
              {
                name: "Rohan Tyagi",
                role: "Executive Chef",
                image:
                  "https://imgs.search.brave.com/eUfXRZVWmeYrEv5KCSwT6zAS2-2l9_Oy7zwHjqQdth0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oYXBweS1tYWxl/LWluZGlhbi1jaGVm/LXRvcXVlXzEyNTcy/MjMtMTA0NTQxLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="team-card group relative h-[450px] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-3xl font-bold text-white mb-1 font-lavish">
                    {member.name}
                  </h3>
                  <p className="text-yellow-400 font-medium uppercase tracking-widest text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;