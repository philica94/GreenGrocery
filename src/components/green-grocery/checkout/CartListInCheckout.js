import { useSelector } from 'react-redux';

import Card from '../../UI/Card';
import ProductDetails from './ProductDetails';

const CartListInCheckout = () => {
  const cart = useSelector((state) => state.cart);
  const cartList = cart.items.map((prod) => (
    <ProductDetails key={prod.id} name={prod.name} price={prod.price} amount={prod.amount} />
  ));

  return <Card>{cartList}</Card>;
};
export default CartListInCheckout;
