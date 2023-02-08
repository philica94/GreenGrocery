import BackToShopButton from '../checkout/BackToShopButton';

import { Link, Route } from 'react-router-dom';
import Cart from '../homepage/cart/Cart';

const MainNavigation = () => {
  return (
    <nav className='navbar sticky-top bg-white mb-2 shadow-sm '>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          {'<-'} Landing Page
        </Link>
        <Route path='/green-grocery' exact>
          <Cart />
        </Route>
        <Route path='/green-grocery/checkout'>
          <BackToShopButton />
        </Route>
      </div>
    </nav>
  );
};

export default MainNavigation;
