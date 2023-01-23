import { Link } from 'react-router-dom';
import CartButton from './CartButton';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      <Link to='/' className={classes['nav-btn']}>
        Home
      </Link>
      <span className={classes['nav-btn']}>Shop</span>
      <span className={classes['nav-btn']}>Contact</span>
      <CartButton className={classes['nav-btn']} />
    </nav>
  );
};

export default MainNavigation;
