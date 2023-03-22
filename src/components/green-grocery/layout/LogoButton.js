import { Link } from 'react-router-dom';

const LogoButton = () => {
  return (
    <Link to='/green-grocery' className='navbar-brand d-flex' role='button'>
      <img src='./images/logo.png' height='60px' />
    </Link>
  );
};

export default LogoButton;
