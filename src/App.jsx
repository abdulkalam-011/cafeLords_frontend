import { Suspense, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader";
import { lazy } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setLocalStorage } from "./store/item";
const UserDashboard = lazy(() => import("./Layout/UserDashboard"));

const App = () => {
  setLocalStorage()
  const toastState = useSelector((state) => state.toast);
  useEffect(() => {
    if (toastState.toastMessage) {
      switch (toastState.toastType) {
        case "success":
          toast.success(toastState.toastMessage);
          break;
        case "error":
          toast.error(toastState.toastMessage);
          break;
        case "info":
          toast.info(toastState.toastMessage);
          break;
        case "warn":
          toast.warn(toastState.toastMessage);
          break;
        default:
          toast(toastState.toastMessage);
      }
      // Optionally clear toast after showing
      // dispatch(clearToast());
    }
  }, [toastState.toastType, toastState.toastMessage]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <UserDashboard />
      </Suspense>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
