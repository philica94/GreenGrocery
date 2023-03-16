import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const WelcomeOnPage = () => {
  const userNickname = useSelector((state) => state.auth.loggedUserEmail.split('@').shift());
  const history = useHistory();

  const goToOrdersPage = () => {
    history.push('/green-grocery/orders');
  };

  return (
    <div className='navbar-brand d-flex dropdown' role='button'>
      <a className='dropdown-toggle' href='' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
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
      </ul>
    </div>
  );
};

export default WelcomeOnPage;
