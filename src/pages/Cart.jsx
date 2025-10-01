import React, { lazy, Suspense, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from '../components/cartDrawer/EmptyCart';
import Loader from '../components/Loader';

const MyCart = lazy(() => import('../components/cartDrawer/MyCart'));


const Cart = () => {
  const {items} = useSelector(state => state.cart)
  useEffect(() => {
    document.title = `cafelords | Cart (${items.length})`;
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

 // Calculate total price

 
 const handlePurchaseAll = useCallback(()=>{
  if (items.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for your purchase!");
  console.log("Purchased items:", items);
 })


  // UI
  return (
    <>
    {items.length === 0 ? (
      <EmptyCart/>
    ) :
    <Suspense fallback={<Loader/>}>
      <MyCart handlePurchaseAll={handlePurchaseAll}/>
    </Suspense>
     }
    </>
  )
}

export default Cart

