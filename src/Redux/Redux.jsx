import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const hearthSlice = createSlice({
  name: "hearth",
  initialState,
  reducers: {
    increment: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
  },
});

export const { increment, removeItem } = hearthSlice.actions;
export default hearthSlice;
