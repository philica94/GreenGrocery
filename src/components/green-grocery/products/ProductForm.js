import { useState } from 'react';
import Button from '../../UI/Button';

const ProductForm = (props) => {
  const [checkedQuantity, setCheckedQuantity] = useState(true);

  const checkedQuantityHandler = () => {
    setCheckedQuantity(true);
  };

  const checkedUnitHandler = () => {
    setCheckedQuantity(false);
  };

  return (
    <div>
      <form>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <input
                id={`quantity${props.id}`}
                type='checkbox'
                checked={checkedQuantity}
                onChange={checkedQuantityHandler}
                className='form-check-input'
              />
              <label htmlFor={`quantity${props.id}`} className='form-label p-1'>
                quantity
              </label>
            </div>
            <div className='col'>
              <input
                id={`unit${props.id}`}
                type='checkbox'
                checked={!checkedQuantity}
                onChange={checkedUnitHandler}
                className='form-check-input'
              />
              <label htmlFor={`unit${props.id}`} className='form-label p-1'>
                unit
              </label>
            </div>
          </div>
        </div>
        <div className='input-group'>
          <input type='number' className='form-control'></input>
          <Button>Add</Button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
