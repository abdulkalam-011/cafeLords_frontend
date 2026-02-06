import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaChevronLeft } from "react-icons/fa6";
import SideBar from '../components/ProfileDrawer/SideBar';

const Profile = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to determine if we are on the main dashboard page
  // Adjust this check if your route structure is different (e.g. /profile/)
  const isDashboardRoute = location.pathname === '/profile' || location.pathname === '/profile/';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (currentUser?.name) {
      document.title = `CafeLords | ${currentUser.name}`;
    }
    if (!currentUser) {
       navigate('/login');
    }
  }, [currentUser, navigate, location.pathname]);

  if (!currentUser) return null;

  return (
    <div className="min-h-screen bg-white md:bg-gray-50 pb-safe">
      
      {/* MOBILE HEADER: Only visible on sub-pages (e.g., Orders) on mobile.
        Gives a native "Back" button experience.
      */}
      {!isDashboardRoute && (
        <div className="md:hidden sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 shadow-sm">
          <Link 
            to="/profile" 
            className="p-2 -ml-2 text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
          >
            <FaChevronLeft />
          </Link>
          <h1 className="font-bold text-lg capitalize text-gray-800">
            {/* Extract title from URL (e.g., "orders" from "/profile/orders") */}
            {location.pathname.split('/').pop().replace('-', ' ')}
          </h1>
        </div>
      )}

      <div className="max-w-7xl mx-auto md:py-8 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* SIDEBAR (Master View)
            - Mobile: Visible ONLY on Root Route ('/profile')
            - Desktop: Always Visible
          */}
          <div className={`w-full md:w-auto flex-shrink-0 ${!isDashboardRoute ? 'hidden md:block' : 'block'}`}>
            <SideBar />
          </div>

          {/* CONTENT (Detail View)
            - Mobile: Visible ONLY on Sub-pages (NOT '/profile')
            - Desktop: Always Visible
          */}
          <main 
            className={`
              flex-1 w-full bg-white md:rounded-2xl md:shadow-sm md:border border-gray-100 
              min-h-[60vh] md:p-8 animate-fade-in
              ${isDashboardRoute ? 'hidden md:block' : 'block'}
            `}
          >
             {/* Wrapper to add padding on mobile only for content */}
            <div className="px-4 py-6 md:p-0">
               <Outlet />
            </div>
            
            {/* Desktop Placeholder for Root Route */}
            {isDashboardRoute && (
              <div className="hidden md:flex flex-col items-center justify-center h-full text-gray-400 py-20 text-center">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/747/747376.png" 
                  alt="Welcome" 
                  className="w-32 h-32 opacity-50 mb-4 grayscale"
                />
                <h2 className="text-2xl font-bold text-gray-300">Welcome Back, {currentUser.name}!</h2>
                <p>Select an option from the sidebar to manage your account.</p>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
};

export default Profile;