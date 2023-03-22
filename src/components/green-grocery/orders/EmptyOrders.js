import { useHistory } from 'react-router-dom';

import Button from '../../UI/Button';
import { CartX } from 'react-bootstrap-icons';

const EmptyOrders = () => {
  const history = useHistory();
  const goToShop = () => {
    history.push('/green-grocery');
  };

  return (
    <div className='row justify-content-md-center'>
      <div className='col-md-10 text-center m-5'>
        <CartX size={100} />
        <div className='fs-2 mt-4'>There are no completed orders.</div>
        <div className='fs-2 mb-4'>Click down below to start shopping.</div>
        <Button onClick={goToShop}>Back To Shop</Button>
      </div>
    </div>
  );
};

export default EmptyOrders;
