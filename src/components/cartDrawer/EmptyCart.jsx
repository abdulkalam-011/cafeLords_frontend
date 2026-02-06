import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <section 
      className="flex flex-col justify-center items-center min-h-[70vh] md:min-h-[80vh] px-4 py-10 text-center"
      aria-labelledby="empty-cart-title"
    >
      <div className="flex flex-col gap-4 justify-center items-center max-w-md mx-auto">
        
        {/* Optimized Image with explicit dimensions to prevent Layout Shift */}
        <div className="relative mb-4">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/13791/13791534.png" 
            alt="Illustration of an empty shopping cart" 
            width="250"
            height="250"
            loading="eager"
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-md"
          />
        </div>

        {/* Semantic Typography */}
        <div className="space-y-2">
          <h2 id="empty-cart-title" className="text-2xl md:text-4xl font-bold text-gray-800 ">
            Looks Like You Are Still Hungry
          </h2>
          <p className="text-gray-500 md:text-lg">
            Your cart is currently empty.
          </p>
          <p className="text-sm md:text-base text-gray-400 max-w-sm mx-auto">
            Browse our menu, find your favorite meals, and fill up this cart with happiness!
          </p>
        </div>

        {/* Accessible Call to Action */}
        <Link 
          to="/menu" 
          className="mt-6 px-8 py-3 bg-yellow-500 text-black rounded-full font-bold text-lg hover:bg-yellow-400 transition-all transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300"
          aria-label="Go to menu to add items"
        >
          View Menu
        </Link>
      </div>
    </section>
  );
};

export default EmptyCart;