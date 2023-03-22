import { useSelector } from 'react-redux';

import { Cart3 } from 'react-bootstrap-icons';
import { selectTotalCartItemsAmount } from '../../../../store/slices/cart';

const CartHeader = ({ openModal }) => {
  const totalItemsAmount = useSelector(selectTotalCartItemsAmount);

  return (
    <div className={`navbar-brand btn btn-outline-primary`} onClick={openModal}>
      Cart <Cart3 size={25} className='mb-1' /> {totalItemsAmount}
    </div>
  );
};

export default CartHeader;
