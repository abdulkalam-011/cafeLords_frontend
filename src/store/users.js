// userModel 

import { CgPassword } from "react-icons/cg";
import { saveToLocal } from "../utils/storage";

// {
//   _id,
//   name,
//   email,
//   password (hashed),
//   wishlist: [productId],
//   cart: [{ productId, quantity }],
//   orderHistory: [orderId],
//   createdAt
// // }


export const users = [
  {
    id: 1,
    name:"aaroque Faze",
    email: "abc@gmail.com",
    password:"aaroq23",
    wishlist: [],
    cart: [],
    orderHistory: [],
    createdAt: new Date().toISOString(),
    profilePicture: "images/cafelords-logo.jpg",
  }
]

