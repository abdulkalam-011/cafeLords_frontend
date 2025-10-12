import { lazy, Suspense, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Search from "../components/Search";

const ProductContainer = lazy(() => import("../components/ProductContainer"));
const MenuList = lazy(() => import("../components/Menu/MenuList"));

const Home = () => {
  const { items } = useSelector((state) => state.menu);
  const navigate = useNavigate();
  const { search } = useSelector((state) => state.menu);

  // set title and scroll to top
  useEffect(() => {
    document.title = "CafeLords - Home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // getting trending now randomly
  const randomIdxStart = Math.floor(Math.random() * items.length);
  const randomIdxEnd = randomIdxStart + 10;
  const trendingNow = items.slice(randomIdxStart, randomIdxEnd);

  // getting today special randomly
  const randomStart = Math.floor(Math.random() * items.length);
  const randomend = randomStart + 5;
  const todaySpecial = items.slice(randomStart, randomend);

  // UI
  return (
    <main className="overflow-hidden">
      <div className="">
        <div className="w-full h-[90vh]  bg-theme-dark flex ">
          <div className="w-[60%] h-full   flex items-center justify-start px-30 relative">
            <div className="  text-xl ">
              <p className="text-[52px] leading-[52px] font-semibold px-4 font-lavish">
                Start your day with fresh
              </p>
              <h1 className="text-[200px] leading-[200px] font-bold  z-99 font-nunito">
                COFFEE
              </h1>
              <img
                src="/images/coffee-bean.png"
                alt="coffe-bean "
                className="absolute top-60 w-10 right-80 z-9 opacity-35"
              />
              <img
                src="/images/coffee-bean.png"
                alt="coffe-bean "
                className="absolute top-60 w-12 right-85 rotate-90 z-1 opacity-35"
              />
              <p className="px-3 font-[16px] leading-[24px]">
                Enjoy Handcarated bevrages and freshly backed Snacks without
                living your comfort zone.Browse Our curated menu and get
                everthing delivered with smooth and Interactive experience made
                just for you.
              </p>
              <div className="flex w-full h-full items-center  px-3 mt-10">
                <button
                  name="explore our menu"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate("/menu");
                  }}
                  className="ml-5 rounded-lg px-5 py-3 text-center bg-theme text-black border-b-1 border-b-white hover:opacity-100"
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>

          <div className="w-[40%] h-full relative  flex items-center justify-center">
            <div
              id="heroImageBox"
              className=" w-full h-80 relative flex items-center justify-left"
            >
              <img
                src="/images/hero-img_v2.png"
                className="w-[80%] ml-10 heroImg"
                alt="hero img"
              />
            </div>
            <img
              src="/images/coffee-bean.png"
              alt="coffe-bean "
              className="absolute bottom-20 w-10 left-20 z-9"
            />
            <img
              src="/images/coffee-bean.png"
              alt="coffe-bean "
              className="absolute bottom-20 w-12 left-25 rotate-90 z-1"
            />
            <img
              src="/images/coffee-bean.png"
              alt="coffe-bean "
              className="absolute top-20 w-10 right-20 z-9"
            />
            <img
              src="/images/coffee-bean.png"
              alt="coffe-bean "
              className="absolute top-20 w-12 right-25 rotate-90 z-1"
            />

            <button
              name="view menu"
              className="px-5 py-3 rounded-lg text-xl bg-theme absolute bottom-10 right-10 border-b-1 z-99 text-black"
            >
              View menu
            </button>
            <div className="absolute bottom-10 left-10 text-2xl text-white z-9">
              <h1 className="text-4xl font-bold">CafeLords</h1>
              <p className="text-lg">The best place to enjoy your coffee</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Search />
      </div>
      {search === "" ? (
        <Suspense fallback={<Loader />}>
          <ProductContainer
            productTagTitle="Today Special"
            data={todaySpecial}
          />
          <ProductContainer productTagTitle="trending Now" data={trendingNow} />
        </Suspense>
      ) : (
        <Suspense fallback={<Loader />}>
          <MenuList />
        </Suspense>
      )}
    </main>
  );
};

export default Home;
