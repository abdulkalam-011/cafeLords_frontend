import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Loader from "../components/Loader";

const ProtectedRoutes = lazy(()=> import("./ProtectedRoutes"));
const PersonalInfo = lazy(()=>import("../components/ProfileDrawer/PersonalInfo")) ;
const SavedAdress = lazy(()=> import("../components/ProfileDrawer/SavedAdress"));
const Orders = lazy(()=> import("../components/ProfileDrawer/Orders")) ;
const Reviews = lazy(()=> import( "../components/ProfileDrawer/Reviews"));
const Notificaltion = lazy(()=>import( "../components/ProfileDrawer/Notificaltion"));

const Menu = lazy(() => import("../pages/Menu"));
const About = lazy(() => import("../pages/About"));
const Login = lazy(() => import("../components/Auth/Login"));
const Profile = lazy(() => import("../pages/Profile"));
const Wishlist = lazy(() => import("../pages/Wishlist"));
const Cart = lazy(() => import("../pages/Cart"));
const NotFound = lazy(() => import("../pages/NotFound"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const CheckIn = lazy(() => import("../pages/CheckIn"));
const SignUp = lazy(() => import("../components/Auth/SignUp"));

const UserRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Home />} />,
          <Route path="/" element={<Home />} />,
          <Route path="/menu" element={<Menu />} />,
          <Route path="/check-in" element={<CheckIn />} />,
          <Route path="/reservation" element={<Home />} />,
          <Route path="/about" element={<About />} />,
          <Route path="/login" element={<Login />} />,
          <Route path="/signup" element={<SignUp />} />,
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/:product" element={<ProductPage />} />,
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />}>
               <Route index element={<Profile/>}/>,
               <Route path="personal-info" element={<PersonalInfo/>}/>,
               <Route path="address" element={<SavedAdress/>}/>,
               <Route path="orders" element={<Orders/>}/>,
               <Route path="reviews" element={<Reviews/>}/>,
               <Route path="notifications" element={<Notificaltion/>}/>,
            </Route> ,
            <Route path="/cart" element={<Cart />} />,
            <Route path="/wishlist" element={<Wishlist />} />,
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default UserRoutes;
