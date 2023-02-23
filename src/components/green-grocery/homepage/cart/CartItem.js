import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../../store/slices/cart';
import { Trash3 } from 'react-bootstrap-icons';

import Button from '../../../UI/Button';

const CartItem = ({ id, name, amount, price, image }) => {
  const dispatch = useDispatch();

  const addOneQuantityProductHandler = () => {
    dispatch(cartActions.increaseCartItemAmount(id));
  };
  const removeOneQuantityProductHandler = () => {
    dispatch(cartActions.reduceCartItemAmount(id));
  };
  const removeEntireProductHandler = () => {
    dispatch(cartActions.removeCartItem(id));
  };

  return (
    <div className='text-center'>
      <div className='row justify-content-md-center align-items-center border'>
        <div className='col-3'>
          <img src={image} height='80px' />
        </div>
        <div className='col-5 col-xl-7 text-start'>
          <h6 className='my-3'>{name}</h6>
          <div className='input-group mb-4'>
            <Button onClick={removeOneQuantityProductHandler}>-</Button>
            <span className='input-group-text bg-white'>{amount}</span>
            <Button onClick={addOneQuantityProductHandler}>+</Button>
          </div>
        </div>
        <div className='col-2 col-xl-1 text-end'>
          <h5 className='mt-3 me-3'>${(amount * price).toFixed(2)}</h5>
          <span className='me-3'>${price.toFixed(2)}</span>
        </div>
        <div className='col-2 col-xl-1 text-center' role='button' onClick={removeEntireProductHandler}>
          <Trash3 />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
