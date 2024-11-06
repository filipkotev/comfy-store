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

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart') || initialState);
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const {product} = action.payload;

      // Find out if product is in the cart already and return it
      const item = state.cartItems.find(i => i.id === product.id);

      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success('Item added to cart');
    },
    removeItem: (state, action) => {

    },
    editItem: (state, action) => {

    },
    clearCart: (state) => {

    },
    calculateTotals: (state) => {
      state.tax = state.cartTotal * 0.1;
      state.orderTotal = state.tax + state.cartTotal + state.shipping;
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }
})

export const {addItem, removeItem, editItem, clearItem} = cartSlice.actions;
export default cartSlice.reducer;