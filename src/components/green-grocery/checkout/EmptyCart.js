import { useHistory } from 'react-router-dom';

import Button from '../../UI/Button';
import { Basket3 } from 'react-bootstrap-icons';

const EmptyCart = () => {
  const history = useHistory();
  const goToShop = () => {
    history.push('/green-grocery');
  };

  return (
    <div className='row justify-content-md-center'>
      <div className='col-md-10 text-center m-5'>
        <Basket3 size={100} />
        <div className='fs-2 m-4'>Your cart is empty</div>
        <Button onClick={goToShop}>Back To Shop</Button>
      </div>
    </div>
  );
};

export default EmptyCart;
