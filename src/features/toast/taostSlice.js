import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  message: "",
  data: null,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToast: (state, action) => {
      state.type = action.payload.type || "";
      state.message = action.payload.message || "";
      state.data = action.payload.data || null;
    },
    clearToast: (state) => {
      state.toastType = "";
      state.toastMessage = "";
      state.data = null;
    },
  },
});

export const { setToast, clearToast } = toastSlice.actions;
export default toastSlice.reducer;
