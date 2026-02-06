import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete, MdStar } from "react-icons/md";
import { FaCircle } from "react-icons/fa";

const OrderCard = ({ order }) => {
  const navigate = useNavigate();

  // Mock data fallback if no prop is passed (for preview purposes)
  const item = order || {
    id: 1,
    name: "Espresso",
    price: 99,
    description: "Premium roasted beans with a rich, bold flavor profile.",
    image: "https://images.unsplash.com/photo-1510591509098-f40962d43898?q=80&w=2069&auto=format&fit=crop",
    rating: 4.5,
    ratingCount: 300,
    size: "M",
    quantity: 1,
    deliveredDate: new Date().toLocaleDateString(),
    status: "Delivered"
  };

  const handleCardClick = (e) => {
    // Prevent navigation if clicking buttons/links
    if (e.target.closest('button') || e.target.closest('a')) return;
    navigate(`/${item.name}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer mb-4"
    >
      {/* 1. Image Section */}
      <div className="w-full md:w-48 h-48 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* 2. Details Section */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
            <span className="md:hidden text-lg font-bold text-gray-900">₹{item.price}</span>
          </div>
          
          <p className="text-sm text-gray-500 line-clamp-2 mb-3">{item.description}</p>
          
          <div className="flex items-center flex-wrap gap-2 text-sm mb-4">
            {/* Rating Badge */}
            <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md font-bold text-xs">
              <span>{item.rating}</span>
              <MdStar />
            </div>
            <span className="text-gray-400 text-xs">({item.ratingCount} ratings)</span>
          </div>

          <div className="flex gap-6 text-sm text-gray-700">
            <p className="bg-gray-100 px-3 py-1 rounded-md">
              <span className="font-semibold text-gray-500 text-xs uppercase mr-1">Size</span>
              {item.size}
            </p>
            <p className="bg-gray-100 px-3 py-1 rounded-md">
              <span className="font-semibold text-gray-500 text-xs uppercase mr-1">Qty</span>
              {item.quantity}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Status & Actions Section */}
      <div className="md:w-64 flex flex-row md:flex-col justify-between items-center md:items-end border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 mt-2 md:mt-0">
        
        {/* Desktop Price */}
        <h3 className="hidden md:block text-2xl font-bold text-gray-900 mb-auto">₹{item.price}</h3>

        {/* Delivery Status */}
        <div className="flex flex-col items-start md:items-end gap-1">
          <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
            <FaCircle className="text-[10px]" />
            <span>{item.status}</span>
          </div>
          <p className="text-xs text-gray-500">
            On {item.deliveredDate}
          </p>
        </div>

        {/* Review Action */}
        <Link 
          to={`/review/${item.id}`}
          className="hidden md:flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-semibold mt-4 hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          <MdStar className="text-lg" />
          Rate & Review Product
        </Link>

        {/* Delete Button (Absolute on Desktop, Flex on Mobile) */}
        <button 
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors z-10"
          title="Remove from order history"
          onClick={(e) => {
            e.stopPropagation();
            // Delete logic
          }}
        >
          <MdDelete className="text-2xl" />
        </button>
      </div>

      {/* Mobile-only "Rate & Review" block to fill width */}
      <Link 
        to={`/review/${item.id}`}
        className="md:hidden w-full text-center py-2 mt-2 bg-blue-50 text-blue-600 font-semibold rounded-lg text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        Rate & Review Product
      </Link>
    </div>
  );
};

export default OrderCard;