import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

  const textRef = React.useRef(null);
  const imgRef = useRef()
  useGSAP(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: -50, 
      stagger: 0.3,
      duration: 1,
      ease: "power3.out",
      delay:.3
    });

    gsap.from(imgRef.current,{
      opacity:0,
      x:100,
      scale:0.8,
      ease:'ease',
      duration:1,
      delay:.3
    })
  })
  return (
    <div className="">
        <div className="w-full h-[90vh]  bg-theme-dark flex ">
          <div className="w-[60%] h-full   flex items-center justify-start px-30 relative">
            <div ref={textRef} className="  text-xl ">
              <h1  className="text-[50px] leading-[50px] font-semibold px-4 font-lavish">
                Start your day with fresh
              </h1>
              <h1   className="text-[150px] leading-[150px] font-bold  z-99 font-nunito">
                COFFEE
              </h1>
              <img
                src="/images/coffee-bean.png"
                alt="coffe-bean "
                className="absolute top-60 w-10 right-80 z-9 opacity-35"
              />
              <img
                src="/images/coffee-bean.png"
                alt="coffe-bean "
                className="absolute top-60 w-12 right-85 rotate-90 z-1 opacity-35"
              />
              <p  className="px-3 font-[16px] leading-[24px]">
                Enjoy Handcarated bevrages and freshly backed Snacks without
                living your comfort zone.Browse Our curated menu and get
                everthing delivered with smooth and Interactive experience made
                just for you.
              </p>
              <div  className="flex w-full h-full items-center  px-3 mt-10">
                <button
                  name="explore our menu"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate("/menu");
                  }}
                  className="ml-5 rounded-lg px-5 py-3 text-center bg-theme text-black border-b-1 border-b-white hover:opacity-100"
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>

          <div ref={imgRef} className="w-[40%] h-full relative  flex items-center justify-center">
            <div
              id="heroImageBox"
              className=" w-full h-80 relative flex items-center justify-left"
            >
              <img
                src="/images/hero-img_v2.png"
                className="w-[80%] ml-10 heroImg"
                alt="hero img"
              />
            </div>
            <img
              src="/images/coffee-bean.png"
              alt="coffe-bean "
              className="absolute bottom-20 w-10 left-20 z-9"
            />
            <img
              src="/images/coffee-bean.png"
              alt="coffe-bean "
              className="absolute bottom-20 w-12 left-25 rotate-90 z-1"
            />
            <img
              src="/images/coffee-bean.png"
              alt="coffe-bean "
              className="absolute top-20 w-10 right-20 z-9"
            />
            <img
              src="/images/coffee-bean.png"
              alt="coffe-bean "
              className="absolute top-20 w-12 right-25 rotate-90 z-1"
            />

            <button
              name="view menu"
              className="px-5 py-3 rounded-lg text-xl bg-theme absolute bottom-10 right-10 border-b-1 z-99 text-black"
            >
              View menu
            </button>
            <div className="absolute bottom-10 left-10 text-2xl text-white z-9">
              <h1 className="text-4xl font-bold">CafeLords</h1>
              <p className="text-lg">The best place to enjoy your coffee</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero