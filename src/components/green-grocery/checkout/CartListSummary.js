import { useSelector } from 'react-redux';

import { selectTotalCartItemsPrice } from '../../../store/slices/cart';
import CartItem from '../homepage/cart/CartItem';
import Button from '../../UI/Button';

const CartListSummary = () => {
  const cart = useSelector((state) => state.cart);
  const totalItemsPrice = useSelector(selectTotalCartItemsPrice).toFixed(2);

  const cartList = cart.items.map(({ id, name, price, amount, image }) => (
    <CartItem key={id} id={id} name={name} price={price} amount={amount} image={image} />
  ));

  return (
    <div className='row justify-content-md-center'>
      <div className='col-6 bg-body'>
        {cartList}
        <div className='row align-items-center p-3 border'>
          <div className='col text-end'>
            <span className='fs-4 pe-3'>Total price: ${totalItemsPrice}</span>
            <Button type='submit'>Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartListSummary;
