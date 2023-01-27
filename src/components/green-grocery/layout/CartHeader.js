import { useSelector } from 'react-redux';

import CartIcon from '../../cart/CartIcon';

const CartHeader = (props) => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className={props.className}>
      <div className='pe-1'>Cart</div>
      <div style={{ width: '2rem', height: '2rem' }}>
        <CartIcon />
      </div>
      <span className='ps-1'>{cart.totalItemsAmount}</span>
    </div>
  );
};

export default CartHeader;
