import { Link } from 'react-router-dom';

const BackToShopButton = () => {
  return (
    <div>
      <Link to='/green-grocery' className='navbar-brand d-flex'>
        <span>Back to Shop</span>
      </Link>
    </div>
  );
};

export default BackToShopButton;
