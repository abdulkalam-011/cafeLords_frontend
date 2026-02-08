import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import UserRoutes from '../routes/UserRoutes';
import { useEffect } from 'react';

const UserDashboard = () => {
  const location = useLocation();

  useEffect(()=>{
    window.scrollTo({top:"0px", behavior:"smooth"})
  })

  const isProfilePage = location.pathname.startsWith('/profile');
  const isSearchPage = location.pathname.startsWith("/search?q")

  return (
    <>
      <Header />
      <UserRoutes />
      {!isProfilePage && !isSearchPage && <Footer />}
    </>
  );
}

export default UserDashboard;