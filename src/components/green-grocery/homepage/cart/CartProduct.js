import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../store/index';
import { Trash3 } from 'react-bootstrap-icons';

import Button from '../../../UI/Button';

const CartProduct = ({ id, name, price, amount }) => {
  const dispatch = useDispatch();
  const item = { id };

  const addOneQuantityProductHandler = () => {
    dispatch(cartActions.increaseCartItemAmount(item));
  };
  const removeOneQuantityProductHandler = () => {
    dispatch(cartActions.reduceCartItemAmount(item));
  };
  const removeEntireProductHandler = () => {
    dispatch(cartActions.removeCartItem(item));
  };

  return (
    <div className='mb-4'>
      <h4>{name}</h4>
      <h5>${(amount * price).toFixed(2)}</h5>
      <Trash3 onClick={removeEntireProductHandler} size={25} />
      <div className='input-group'>
        <Button onClick={removeOneQuantityProductHandler}>-</Button>
        <span className='input-group-text bg-white'>{amount}</span>
        <Button onClick={addOneQuantityProductHandler}>+</Button>
      </div>
    </div>
  );
};

export default CartProduct;
