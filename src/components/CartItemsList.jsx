import { useSelector } from "react-redux";
import { CartItem } from './';

const CartItemsList = () => {
  const { cartItems } = useSelector(state => state.cartSlice);

  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </div>
  )
}

export default CartItemsList