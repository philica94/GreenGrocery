import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authActions } from '../../../store/slices/auth';
import classes from './WelcomeOnPage.module.css';

const WelcomeOnPage = () => {
  const dispatch = useDispatch();
  const userNickname = useSelector((state) => state.auth.loggedUserEmail.split('@').shift());
  const history = useHistory();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const goToOrdersPage = () => {
    history.push('/green-grocery/orders');
    setShowDropdown(false);
  };

  const submitLogoutHandler = () => {
    dispatch(authActions.logout());
    history.push('/green-grocery');
  };

  useEffect(() => {
    const onDocumentClick = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('click', onDocumentClick);
    }
    return () => document.removeEventListener('click', onDocumentClick);
  }, [showDropdown]);

  const toggleDropdown = () => {
    setShowDropdown((dropdownState) => !dropdownState);
  };

  const cssClassWelcomeDropdown = `dropdown-menu ${showDropdown ? 'show' : ''} ${classes.dropdownPosition}`;

  return (
    <div className='navbar-brand d-flex dropdown' role='button' ref={dropdownRef}>
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
