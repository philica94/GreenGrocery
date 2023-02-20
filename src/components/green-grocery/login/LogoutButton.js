import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/slices/auth';
import Button from '../../UI/Button';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const submitLogoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <Button type='submit' className='navbar-brand d-flex' onClick={submitLogoutHandler}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
