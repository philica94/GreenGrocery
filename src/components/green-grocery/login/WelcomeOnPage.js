import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authActions } from '../../../store/slices/auth';
import classes from './WelcomeOnPage.module.css';

const WelcomeOnPage = () => {
  const dispatch = useDispatch();
  const userNickname = useSelector((state) => state.auth.loggedUserEmail.split('@').shift());
  const history = useHistory();
  const [showDropdown, setShowDropdown] = useState(false);

  const goToOrdersPage = () => {
    history.push('/green-grocery/orders');
  };

  const submitLogoutHandler = () => {
    dispatch(authActions.logout());
    history.push('/green-grocery');
  };

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const cssClassWelcomeDropdown = `dropdown-menu ${showDropdown ? 'show' : ''} ${classes.dropdownPosition}`;

  return (
    <div className='navbar-brand d-flex dropdown' role='button'>
      <a className='dropdown-toggle text-decoration-none' role='button' onClick={toggleDropdown}>
        <span>
          Welcome <span>{userNickname}</span> !
        </span>
      </a>
      <ul className={cssClassWelcomeDropdown}>
        <li>
          <a className='dropdown-item' onClick={goToOrdersPage}>
            My orders
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        <li>
          <a className='dropdown-item' onClick={submitLogoutHandler}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default WelcomeOnPage;
