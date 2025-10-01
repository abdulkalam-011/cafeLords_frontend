import { createSlice, current } from "@reduxjs/toolkit";
import { getFromLocal, saveToLocal } from "../../utils/storage";

const initialState = {
  isAuthenticated: getFromLocal("currentUser")?.isAuthenticated || false,
  users: getFromLocal("users") || [],
  currentUser: getFromLocal("currentUser")?.user || null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const exist = state.users.find(
        (u) => u.email === email && u.password === password
      );
      const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passRegx = /^.{8,}$/;

      if (!emailRegx.test(email)) {
        state.error = "Invalid email format!";
        return;
      }
      if (!passRegx.test(password)) {
        state.error = "Password should be at least 8 characters!";
        return;
      }
      const existingEmail = state.users.find(u => u.email === email)
      if(!existingEmail){
        state.error = "user with this email is not registered!";
        return;
      }
      if (exist) {
        state.currentUser = state.users?.find(i => i.email === email);
        state.error = null;
        state.isAuthenticated = true;
        saveToLocal("currentUser", {user:state.currentUser, isAuthenticated: true});
      } else {
        state.error = "invalid password";
        return
      }
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      saveToLocal("currentUser", {user:null, isAuthenticated: false});
    },

    signup: (state, action) => {
      const user = action.payload;
       const exist = state.users.find((u) => u.email === user.email);

      const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passRegx = /^.{8,}$/;

      if (!emailRegx.test(user.email)) {
        state.error = "Invalid email format!";
        return;
      }
      if (!passRegx.test(user.password)) {
        state.error = "Password should be at least 8 characters!";
        return;
      }

        if(!exist){
          state.users.push(user);
          console.log(state.users)
          /saveToLocal("users", state.users);
          state.error = null;
        }else {
          state.error = 'user with this email already exists'
          return;
        }
      },
      authError: (state,action) => {
        const newError = action.payload;
        state.error = newError;
      },
      clearCurrentUser : (state)=>{
          state.currentUser = null
          state.isAuthenticated = false
          localStorage.removeItem("currentUser")
      }
    },
});

export const { login, logout, signup,authError,clearCurrentUser } = authSlice.actions;
export default authSlice.reducer;
