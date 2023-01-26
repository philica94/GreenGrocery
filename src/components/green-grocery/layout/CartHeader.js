import CartIcon from '../../cart/CartIcon';

const CartHeader = (props) => {
  return (
    <div className={props.className}>
      <div className='pe-1'>Cart</div>
      <div style={{ width: '2rem', height: '2rem' }}>
        <CartIcon />
      </div>
      <span className='ps-1'>4</span>
    </div>
  );
};

export default CartHeader;
