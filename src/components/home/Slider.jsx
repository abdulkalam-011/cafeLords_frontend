// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css"; 

// Import required modules
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom"; 
import { FaArrowRight } from "react-icons/fa6";

// Content Data Configuration
const sliderData = [
  {
    id: 1,
    badge: "Limited Time",
    title: "SUNRISE COMBO",
    description: "Signature Arabica blend + fresh butter croissant. 30% OFF until 11 AM.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    ctaText: "Order Now",
    ctaLink: "/menu/breakfast",
  },
  {
    id: 2,
    badge: "Month Special",
    title: "CHEESY DELIGHT",
    description: "Double patty, smoked gouda, and spicy sauce. Free fries included.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop",
    ctaText: "Get Deal",
    ctaLink: "/menu/burgers",
  },
  {
    id: 3,
    badge: "Sweet Tooth",
    title: "NY CHEESECAKE",
    description: "Rich, creamy, and topped with strawberry compote. Buy 1 Get 1 (50% Off).",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2070&auto=format&fit=crop",
    ctaText: "View Menu",
    ctaLink: "/menu/desserts",
  },
  {
    id: 4,
    badge: "Trending",
    title: "HAZELNUT BREW",
    description: "Beat the heat with our 24-hour steeped cold brew. Vegan milk available.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b5c73553?q=80&w=2070&auto=format&fit=crop",
    ctaText: "Try It",
    ctaLink: "/menu/coffee",
  },
];

export default function Slider() {
  return (
    <section className="w-full relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        // Responsive Height: Taller on mobile (poster style), Wider on desktop
        className="mySwiper w-full h-[25vh] rounded-b-4xl md:h-[75vh] lg:h-[85vh] transition-all duration-300"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full bg-theme-dark">
            
            {/* 1. Background Image (Zoom effect) */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] scale-100 hover:scale-110 ease-linear"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* 2. Gradient Overlay - Crucial for text readability */}
            {/* Darker at bottom for text, lighter at top for image visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

            {/* 3. Text Content */}
            <div className="absolute inset-0 flex flex-col justify-end md:justify-center items-center pb-20 md:pb-0 px-6 text-center z-10">
              
              {/* Badge */}
              <span className="mb-4 px-4 py-1.5 border border-[#C19A6B] text-[#C19A6B] text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase rounded-full bg-black/50 backdrop-blur-sm">
                {slide.badge}
              </span>

              {/* Title: Huge on Desktop, Condensed on Mobile */}
              <h1 className="text-white font-black uppercase leading-[0.9] tracking-tighter mb-4
                             text-5xl        /* Mobile */
                             md:text-7xl     /* Tablet */
                             lg:text-9xl     /* Desktop */
                             drop-shadow-2xl">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-gray-300 font-medium mb-8 max-w-[90%] md:max-w-2xl
                            text-sm         /* Mobile */
                            md:text-xl      /* Desktop */
                            leading-relaxed">
                {slide.description}
              </p>

              {/* Button */}
              <Link
                to={slide.ctaLink}
                className="group flex items-center gap-3 bg-[#C19A6B] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm md:text-base hover:bg-white transition-colors duration-300"
              >
                {slide.ctaText}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}