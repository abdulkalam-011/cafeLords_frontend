import { configureStore } from "@reduxjs/toolkit";
import menuReducer from '../features/menu/menusSlice'
import cartReducer from '../features/cart/cartSlice'
import authReducer from '../features/auth/authSlice'
import toastReducer from '../features/toast/taostSlice'



export  const store = configureStore({
  reducer:{
      menu:menuReducer,
      cart:cartReducer,
      auth:authReducer,
      toast:toastReducer,
  }
})
