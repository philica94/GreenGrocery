import { Link } from 'react-router-dom';

const BackToShopButton = () => {
  return (
    <div>
      <Link to='/green-grocery' className='btn btn-outline-primary navbar-brand'>
        <span>Back to Shop</span>
      </Link>
    </div>
  );
};

export default BackToShopButton;
