import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import Button from '../../UI/Button';
import { cartActions } from '../../../store/index';

const ProductForm = ({ id, name, price }) => {
  const dispatch = useDispatch();
  const [checkedQuantity, setCheckedQuantity] = useState(true);

  const checkedQuantityHandler = () => {
    setCheckedQuantity(true);
  };
  const checkedUnitHandler = () => {
    setCheckedQuantity(false);
  };

  const amountInputItemRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmountNumber = Number(amountInputItemRef.current.value);

    const item = { id, name, price, amount: enteredAmountNumber };
    dispatch(cartActions.addCartItem(item));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <input
                id={`quantity_${id}`}
                type='checkbox'
                checked={checkedQuantity}
                onChange={checkedQuantityHandler}
                className='form-check-input'
              />
              <label htmlFor={`quantity_${id}`} className='form-label p-1'>
                quantity
              </label>
            </div>
            <div className='col'>
              <input
                id={`unit_${id}`}
                type='checkbox'
                checked={!checkedQuantity}
                onChange={checkedUnitHandler}
                className='form-check-input'
              />
              <label htmlFor={`unit_${id}`} className='form-label p-1'>
                unit
              </label>
            </div>
          </div>
        </div>
        <div className='input-group'>
          <input type='number' ref={amountInputItemRef} defaultValue={1} min='1' step='1' className='form-control' />
          <Button>Add</Button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
