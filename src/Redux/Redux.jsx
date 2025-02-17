import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  carthearth: [],
};

const addcartSlice = createSlice({
  name: "addcart",
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
    incrementhearth: (state, action) => {
      state.carthearth.push({ ...action.payload });
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
    removeFromCart: (state, action) => {
      console.log(action.payload); // بررسی مقدار payload
      state.carthearth = state.carthearth.filter(
        (item) => item.Cartid !== action.payload
      );
    },
  },
});

export const {
  increment,
  removeItem,
  incrementhearth,
  removeFromHearth,
  removeFromCart,
} = addcartSlice.actions;
export default addcartSlice;
