import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Search from "../components/Search";
import Hero from "../components/home/Hero";
import Slider from "../components/home/Slider";
import OrderSlider from "../components/home/OrderSlider";
import { setCategory, setSearch } from "../features/menu/menusSlice";

const ProductContainer = lazy(() => import("../components/ProductContainer"));
const MenuList = lazy(() => import("../components/Menu/MenuList"));

const Home = () => {
 
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.menu);
  const { search } = useSelector((state) => state.menu);

  // set title and scroll to top
  useEffect(() => {
    dispatch(setSearch(''))
    dispatch(setCategory('All'))
    document.title = "CafeLords - Home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]);

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
      <Hero />
      <OrderSlider/>
      <div className="px-[100px] mt-10">

      <Slider/>
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
