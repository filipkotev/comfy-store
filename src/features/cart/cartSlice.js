import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {

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