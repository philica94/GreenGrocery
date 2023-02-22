import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import Button from '../../../UI/Button';
import { cartActions } from '../../../../store/slices/cart';

const ProductForm = ({ id }) => {
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

    dispatch(cartActions.setItemQuantity({ itemId: id, changeAmount: enteredAmountNumber }));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='row mb-2'>
        <div className='col d-flex align-items-center'>
          <input
            id={`quantity_${id}`}
            type='checkbox'
            checked={checkedQuantity}
            onChange={checkedQuantityHandler}
            className='form-check-input'
          />
          <label htmlFor={`quantity_${id}`} className='form-label p-1 mb-0'>
            quantity
          </label>
        </div>
        <div className='col d-flex align-items-center'>
          <input
            id={`unit_${id}`}
            type='checkbox'
            checked={!checkedQuantity}
            onChange={checkedUnitHandler}
            className='form-check-input'
          />
          <label htmlFor={`unit_${id}`} className='form-label p-1 mb-0'>
            unit
          </label>
        </div>
      </div>
      <div className='input-group'>
        <input type='number' ref={amountInputItemRef} defaultValue={1} min='1' step='1' className='form-control' />
        <Button type='submit'>Add</Button>
      </div>
    </form>
  );
};

export default ProductForm;
