import { Link } from 'react-router-dom';

const LogoutButton = () => {
  return (
    <Link to='/green-grocery' className='navbar-brand'>
      <span>Log Out</span>
    </Link>
  );
};

export default LogoutButton;
