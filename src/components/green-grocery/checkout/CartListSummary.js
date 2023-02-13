import { useSelector } from 'react-redux';

import Card from '../../UI/Card';
import CartListSummaryFooter from './CartListSummaryFooter';
import CartListProductDetails from './CartListProductDetails';
import CartListHeader from './CartListHeader';

const CartListSummary = () => {
  const cart = useSelector((state) => state.cart);
  const cartList = cart.items.map(({ id, name, price, amount }) => (
    <CartListProductDetails key={id} id={id} name={name} price={price} amount={amount} />
  ));

  return (
    <Card>
      <CartListHeader />
      <hr />
      {cartList}
      <hr />
      <CartListSummaryFooter />
    </Card>
  );
};
export default CartListSummary;
