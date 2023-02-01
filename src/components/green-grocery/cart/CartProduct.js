import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/index';

import Button from '../../UI/Button';

const CartProduct = ({ id, name, price, amount }) => {
  const dispatch = useDispatch();

  const addProductHandler = () => {
    const item = { id, amount: 1 };
    dispatch(cartActions.addCartItem(item));
  };
  const removeProductHandler = () => {
    console.log('removed 1');
  };

  return (
    <div className='mb-4'>
      <h4>{name}</h4>
      <h5>${(amount * price).toFixed(2)}</h5>
      <div className='input-group'>
        <Button onClick={removeProductHandler}>-</Button>
        <span className='input-group-text bg-white'>{amount}</span>
        <Button onClick={addProductHandler}>+</Button>
      </div>
    </div>
  );
};

export default CartProduct;
