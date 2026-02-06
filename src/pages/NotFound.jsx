import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-[#111] text-white px-4 text-center overflow-hidden relative">
      
      {/* Background decoration (optional) */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      {/* Main 404 Heading */}
      <div className="relative">
        <h1 className="text-[8rem] sm:text-[10rem] md:text-[15rem] font-black leading-none tracking-tighter flex items-center justify-center gap-2 md:gap-4 select-none drop-shadow-2xl">
          <span className="bg-gradient-to-b from-gray-200 to-gray-600 bg-clip-text text-transparent">4</span>
          <span className="animate-[spin_10s_linear_infinite] text-[6rem] sm:text-[8rem] md:text-[12rem] filter grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
            🌍
          </span>
          <span className="bg-gradient-to-b from-gray-200 to-gray-600 bg-clip-text text-transparent">4</span>
        </h1>
      </div>

      {/* Subtext */}
      <div className="space-y-4 mb-10 mt-4 z-10">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white">
          Page Not Found
        </h2>
        <p className="text-gray-400 max-w-md mx-auto text-sm md:text-lg px-6">
          Oops! The page you are looking for seems to have gotten lost in space.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 z-10">
        <button 
          className="px-8 py-3 rounded-full border border-gray-600 hover:border-white hover:bg-white hover:text-black transition-all duration-300 font-semibold flex items-center justify-center gap-2 group"
          onClick={() => navigate(-1)}
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> 
          Go Back
        </button>
        
        <button 
          className="px-8 py-3 rounded-full bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 font-bold shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)]"
          onClick={() => navigate('/')}
        >
          Return Home
        </button>
      </div>

    </main>
  );
};

export default NotFound;