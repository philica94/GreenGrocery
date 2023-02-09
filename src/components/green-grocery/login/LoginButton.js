import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <div>
      <Link to='/green-grocery/login' className='navbar-brand'>
        <span>Log In</span>
      </Link>
    </div>
  );
};

export default LoginButton;
