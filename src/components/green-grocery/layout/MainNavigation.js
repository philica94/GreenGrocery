import { Link, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Cart from '../homepage/cart/Cart';
import BackToShopButton from '../checkout/BackToShopButton';
import LoginButton from '../login/LoginButton';
import LogoutButton from '../login/LogoutButton';

const MainNavigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav className='navbar sticky-top bg-white mb-2 shadow-sm '>
      <div className='container'>
        <Route path='/green-grocery'>
          <Link to='/' className='navbar-brand'>
            {'<-'} Landing Page
          </Link>
          <Cart />
          {!isLoggedIn && <LoginButton />}
          {isLoggedIn && <LogoutButton />}
        </Route>
        <Route path='/green-grocery/checkout'>
          <BackToShopButton />
        </Route>
      </div>
    </nav>
  );
};

export default MainNavigation;
