import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Loader from "../components/Loader";
import ProtectedRoutes from "./ProtectedRoutes";
import PersonalInfo from "../components/ProfileDrawer/PersonalInfo";
import SavedAdress from "../components/ProfileDrawer/SavedAdress";
import Orders from "../components/ProfileDrawer/Orders";
import Reviews from "../components/ProfileDrawer/Reviews";
import Notificaltion from "../components/ProfileDrawer/Notificaltion";

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
               <Route index element={<PersonalInfo/>}/>,
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
