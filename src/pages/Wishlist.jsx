import WishlistCard from "../components/wishListDrawer/WishlistCard";

const Wishlist = () => {
  return (
    <>
      <section className="p-10" >
        <h1 className="text-lg m-5"><b>My Wishlist</b></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-1">
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
        </div>
      </section>
    </>
  );
};

export default Wishlist;
