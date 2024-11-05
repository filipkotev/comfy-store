import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  numItemsInCart: 3,
  cartTotal: 5,
  shipping: 500,
  tax: 80,
  orderTotal: 600,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
    },
    removeItem: (state, action) => {

    },
    editItem: (state, action) => {

    },
    clearCart: (state) => {

    }
  }
})

export const {addItem, removeItem, editItem, clearItem} = cartSlice.actions;
export default cartSlice.reducer;