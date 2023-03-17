import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authActions } from '../../../store/slices/auth';

const WelcomeOnPage = () => {
  const dispatch = useDispatch();
  const userNickname = useSelector((state) => state.auth.loggedUserEmail.split('@').shift());
  const history = useHistory();

  const goToOrdersPage = () => {
    history.push('/green-grocery/orders');
  };

  const submitLogoutHandler = () => {
    dispatch(authActions.logout());
    history.push('/green-grocery');
  };

  return (
    <div className='navbar-brand d-flex dropdown' role='button'>
      <a className='dropdown-toggle' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
        <span>
          Welcome <span>{userNickname}</span> !
        </span>
      </a>
      <ul className='dropdown-menu'>
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
