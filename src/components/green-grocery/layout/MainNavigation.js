import { Link } from 'react-router-dom';
import CartHeader from './CartHeader';

const MainNavigation = () => {
  return (
    <nav className='navbar sticky-top bg-white mb-2 shadow-sm '>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          Home
        </Link>
        <Link to='/green-grocery/shop' className='navbar-brand'>
          Shop
        </Link>
        <span className='navbar-brand'>Contact</span>
        <CartHeader className='navbar-brand btn btn-outline-primary d-flex p-sm-2 p-1' />
      </div>
    </nav>
  );
};

export default MainNavigation;
