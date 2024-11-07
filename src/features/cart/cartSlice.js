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
  return JSON.parse(localStorage.getItem('cart')) || initialState;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;

      // Find out if product is in the cart already and return it
      const item = state.cartItems.find(i => i.cartID === product.cartID);

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
      const { cartID } = action.payload;

      // We need the product and its properties like price and amount so we can subtract them from cart total
      const product = state.cartItems.find(i => i.cartID === cartID)

      // Override state's cartItems with the updated array of items
      state.cartItems = state.cartItems.filter(i => i.cartID !== cartID);

      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      // Re-calculate cart totals with the updated state properties
      cartSlice.caseReducers.calculateTotals(state);

      toast.success('Item removed from cart');
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find(i => i.cartID === cartID);

      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      // Re-calculate cart totals with the updated state properties
      cartSlice.caseReducers.calculateTotals(state);

      toast.success('Cart updated')
    },
    clearCart: () => {
      localStorage.setItem('cart', JSON.stringify(initialState));
      return initialState;
    },
    calculateTotals: (state) => {
      state.tax = state.cartTotal * 0.1;
      state.orderTotal = state.tax + state.cartTotal + state.shipping;
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }
})

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;