import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";

const OrderSlider = () => {
  const marqueeTween = useRef(null);
  const directionRef = useRef("left");

  useEffect(() => {
    // respect reduced motion
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const startMarquee = (dir) => {
      // kill previous
      if (marqueeTween.current) {
        marqueeTween.current.kill();
      }

      const target = dir === "left" ? "-170%" : "0%";
      marqueeTween.current = gsap.to(".marque", {
        x: target,
        ease: "none",
        duration: 4,
        repeat: -1,
      });
    };

    // initial start left
    startMarquee("left");
    gsap.to(".icon", { rotate: 0, duration: 0.1 });

    const onWheel = (e) => {
      const dir = e.deltaY < 0 ? "left" : "right";
      if (dir !== directionRef.current) {
        directionRef.current = dir;
        startMarquee(dir);
        gsap.to(".icon", {
          rotate: dir === "left" ? -180 : 0,
          duration: .1,
        });
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      if (marqueeTween.current) marqueeTween.current.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden py-2 whitespace-pre bg-yellow-200 w-full flex justify-between gap-20 items-center flex-nowrap text-3xl uppercase  font-semibold font-major">
      <div className="flex shrink-0  px-5  gap-5 items-center translate-x-[70%] marque">
        <h1>order your favourite food now</h1>
        <span className="icon p-2 rounded-full border-1">
          <FaArrowRight />
        </span>
      </div>
      <div className="flex shrink-0  px-5  gap-5 items-center translate-x-[70%] marque">
        <h1>order your favourite food now</h1>
        <span className="icon p-2 rounded-full border-1">
          <FaArrowRight />
        </span>
      </div>
      <div className="flex shrink-0  px-5  gap-5 items-center translate-x-[70%] marque">
        <h1>order your favourite food now</h1>
        <span className="icon p-2 rounded-full border-1">
          <FaArrowRight />
        </span>
      </div>
      <div className="flex shrink-0  px-5  gap-5 items-center translate-x-[70%] marque">
        <h1>order your favourite food now</h1>
        <span className="icon p-2 rounded-full border-1">
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
};

export default OrderSlider;
