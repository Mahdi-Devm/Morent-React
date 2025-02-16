import { configureStore } from "@reduxjs/toolkit";
import hearthSlice from "../Redux";

const store = configureStore({
  reducer: {
    hearth: hearthSlice.reducer,
  },
});

export default store;
