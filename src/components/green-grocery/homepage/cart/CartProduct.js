import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../../store/slices/cart';
import { Trash3 } from 'react-bootstrap-icons';

import Button from '../../../UI/Button';

const CartProduct = ({ id, name, price, amount }) => {
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
    <div className='mb-4'>
      <h4>{name}</h4>
      <h5>${(amount * price).toFixed(2)}</h5>
      <span role='button'>
        <Trash3 onClick={removeEntireProductHandler} size={25} />
      </span>
      <div className='input-group'>
        <Button onClick={removeOneQuantityProductHandler}>-</Button>
        <span className='input-group-text bg-white'>{amount}</span>
        <Button onClick={addOneQuantityProductHandler}>+</Button>
      </div>
    </div>
  );
};

export default CartProduct;
