import { configureStore } from "@reduxjs/toolkit";
import addcartSlice from "../Redux";

const store = configureStore({
  reducer: {
    addcart: addcartSlice.reducer,
  },
});

export default store;
