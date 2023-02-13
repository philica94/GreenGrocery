import { useSelector } from 'react-redux';
import Button from '../../UI/Button';

import { selectTotalCartItemsPrice } from '../../../store';

const CartListSummaryFooter = () => {
  const totalItemsPrice = useSelector(selectTotalCartItemsPrice).toFixed(2);

  return (
    <div className='container'>
      <div className='row'>
        <h5 className='col-10 text-end'>Total Price: ${totalItemsPrice}</h5>
        <div className='col'>
          <Button type='submit'>Order</Button>
        </div>
      </div>
    </div>
  );
};

export default CartListSummaryFooter;
