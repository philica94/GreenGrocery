import { cartActions } from '../../../store';

import { Trash3 } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';

const CartListProductDetails = ({ id, name, price, amount }) => {
  const dispatch = useDispatch();

  const removeEntireProductHandler = () => {
    dispatch(cartActions.removeCartItem({ id }));
  };

  return (
    <div className='container text-center'>
      <div className='row fs-5 mb-2'>
        <div className='col'>{name}</div>
        <div className='col'>{price}</div>
        <div className='col'>{amount}</div>
        <div className='col'>${(amount * price).toFixed(2)}</div>
        <div className='col' onClick={removeEntireProductHandler}>
          <Trash3 />
        </div>
      </div>
    </div>
  );
};

export default CartListProductDetails;
