import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/index';

import Button from '../../UI/Button';

const CartProduct = ({ id, name, price, amount }) => {
  const dispatch = useDispatch();

  const addOneQuantityProductHandler = () => {
    const item = { id, amount: 1 };
    dispatch(cartActions.addCartItem(item));
  };
  const removeOneQuantityProductHandler = () => {
    const item = { id };
    dispatch(cartActions.removeCartItem(item));
  };

  return (
    <div className='mb-4'>
      <h4>{name}</h4>
      <h5>${(amount * price).toFixed(2)}</h5>
      <div className='input-group'>
        <Button onClick={removeOneQuantityProductHandler}>-</Button>
        <span className='input-group-text bg-white'>{amount}</span>
        <Button onClick={addOneQuantityProductHandler}>+</Button>
      </div>
    </div>
  );
};

export default CartProduct;
