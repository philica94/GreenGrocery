import { useSelector } from 'react-redux';

import { Cart3 } from 'react-bootstrap-icons';
import { selectTotalCartItemsAmount } from '../../../store';

const CartHeader = ({ className, openModal }) => {
  const totalItemsAmount = useSelector(selectTotalCartItemsAmount);

  return (
    <div className={className} onClick={openModal}>
      <div className='pe-1'>Cart</div>
      <div style={{ transform: 'translate(0,-10%)' }}>
        <Cart3 />
      </div>
      <span className='ps-1'>{totalItemsAmount}</span>
    </div>
  );
};

export default CartHeader;
