import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  
  // 1. State to track if the main hero image is loaded
  const [isLoading, setIsLoading] = useState(true);

  useGSAP(() => {
    // Only run animations if the image has finished loading to prevent jumping
    if (!isLoading) {
      
      // Text Entrance
      gsap.from(textRef.current, {
        opacity: 0,
        y: -50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });

      // Image Entrance (Slide in)
      gsap.from(".hero-main-img", {
        opacity: 0,
        x: 10,
        scale: 0.8,
        ease: 'power3.out',
        duration: 1.2,
      });

      // 2. CONTINUOUS "LEVITATING" ANIMATION
      // This makes the cup float up and down endlessly
      gsap.to(".hero-main-img", {
        y: -20, // Move up 20px
        duration: 2,
        repeat: -1, // Infinite repeat
        yoyo: true, // Go back and forth
        ease: "sine.inOut" // Smooth sine wave movement
      });
    }
  }, { scope: containerRef, dependencies: [isLoading] }); // Re-run when loading finishes

  return (
    <div ref={containerRef} className="overflow-hidden w-full md:min-h-screen h-fit bg-theme-dark flex flex-col lg:flex-row relative pb-10">
      
      {/* --- TEXT SECTION --- */}
      <div className="w-full lg:w-[60%] flex flex-col items-center md:items-start justify-center px-6 md:px-12 lg:px-20  relative order-2 lg:order-1 z-10">
        <div ref={textRef} className="text-xl relative text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold font-lavish text-white">
            Start your day with fresh
          </h1>
          <h1 className="text-4xl  md:text-8xl lg:text-[150px] leading-tight lg:leading-[150px] font-bold font-nunito text-white drop-shadow-xl">
            COFFEE
          </h1>

          {/* Decorative Background Beans */}
          <img src="/images/coffee-bean.png" alt="bean" className="absolute top-0 right-0 w-8 md:w-16 opacity-20 animate-pulse" />

          <p className=" md:mt-2 text-sm md:text-2xl leading-[28px] max-w-lg text-gray-300">
            Enjoy handcrafted beverages and freshly baked snacks without
            leaving your comfort zone. Browse our curated menu and get
            everything delivered with a smooth experience.
          </p>

          <div className="flex w-full items-center mt-10 justify-center md:justify-start flex-col gap-4 md:flex-row">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/menu");
              }}
              className=" w-64 rounded-lg px-8 py-4 bg-white text-black font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              ORDER NOW →
            </button>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/menu");
              }}
              className=" w-64 rounded-lg px-8 py-4  border-white border-2 font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              EXPLORE MENU
            </button>
         
          </div>
        </div>
      </div>

      {/* --- IMAGE SECTION --- */}
      <div className="w-full lg:w-[40%] h-[50vh] lg:h-auto relative flex items-center justify-center bg-theme-dark/50 order-1 lg:order-2">
        
        {/* 3. LOADING SPINNER OVERLAY */}
        {/* This displays while the heavy image is downloading */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            {/* Optional: Add text below spinner */}
            <span className="absolute mt-24 text-white text-sm tracking-widest uppercase">Brewing...</span>
          </div>
        )}

        <div id="heroImageBox" className="w-full h-full relative flex items-center justify-center">
          
          {/* Main Hero Image */}
          <img
            src="/images/hero-img_v2.png"
            className={`w-[65%] md:w-[50%] lg:w-[85%] object-contain z-20 hero-main-img 
              ${isLoading ? 'opacity-100' : 'opacity-10'} transition-opacity duration-300`} 
            alt="Hero Coffee Cup"
            onLoad={() => setIsLoading(false)} // 4. Trigger GSAP when loaded
          />
          
          {/* Background Glow behind the cup */}
          <div className="absolute w-[300px] h-[300px] bg-orange-500/20 blur-[100px] rounded-full z-10 pointer-events-none"></div>

        </div>

        {/* Floating elements separate from main image */}
        <img src="/images/coffee-bean.png" alt="bean" className="hidden md:block absolute bottom-20 left-10 w-10 opacity-40 blur-[1px]" />
        <img src="/images/coffee-bean.png" alt="bean" className="hidden md:block absolute top-20 right-20 w-12 rotate-45 opacity-40 blur-[2px]" />

        
      </div>
    </div>
  );
};

export default Hero;