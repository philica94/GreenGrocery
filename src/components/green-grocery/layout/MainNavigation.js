import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Cart from '../homepage/cart/Cart';
import LoginButton from '../login/LoginButton';
import { BoxArrowLeft } from 'react-bootstrap-icons';
import Favourites from '../homepage/favourites/Favourites';
import WelcomeOnPage from '../login/WelcomeOnPage';
import LogoButton from './LogoButton';

const MainNavigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { pathname } = useLocation();
  const isInCheckout = pathname.includes('/green-grocery/checkout');

  return (
    <nav className='navbar sticky-top bg-white mb-2 shadow-sm d-flex px-3'>
      <div className='d-flex align-items-center'>
        <Link to='/' className='navbar-brand'>
          <BoxArrowLeft size={40} />
        </Link>
        <LogoButton />
      </div>
      <div className='d-flex gap-4'>
        <Favourites />
        {!isInCheckout && <Cart />}
        {isLoggedIn ? <WelcomeOnPage /> : <LoginButton />}
      </div>
    </nav>
  );
};

export default MainNavigation;
