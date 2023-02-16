import { Link, Route, useLocation, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Cart from '../homepage/cart/Cart';
import BackToShopButton from '../checkout/BackToShopButton';
import LoginButton from '../login/LoginButton';
import LogoutButton from '../login/LogoutButton';

const MainNavigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { pathname } = useLocation();
  const greenGroceryPathMatch = useRouteMatch(['/green-grocery']);
  const isInCheckout = pathname.includes('/green-grocery/checkout');
  const isInTheShop = greenGroceryPathMatch?.isExact;

  return (
    <nav className='navbar sticky-top bg-white mb-2 shadow-sm d-flex px-3'>
      <Route path='/green-grocery'>
        <Link to='/' className='navbar-brand'>
          {'<-'} Landing Page
        </Link>
        {!isInCheckout && <Cart />}
        {isLoggedIn ? <LogoutButton /> : <LoginButton />}
        {!isInTheShop && <BackToShopButton />}
      </Route>
    </nav>
  );
};

export default MainNavigation;
