import Button from '../../UI/Button';

const ProductForm = (props) => {
  return (
    <div>
      <form>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <input id='quantity' type='checkbox' className='form-check-input' />
              <label htmlFor='quantity' className='form-label p-1'>
                quantity
              </label>
            </div>
            <div className='col'>
              <input id='unit' type='checkbox' className='form-check-input' />
              <label htmlFor='unit' className='form-label p-1'>
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
