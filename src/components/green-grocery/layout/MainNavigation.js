import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../UI/Modal';
import Cart from '../cart/Cart';
import CartHeader from './CartHeader';

const MainNavigation = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <nav className='navbar sticky-top bg-white mb-2 shadow-sm '>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          Home
        </Link>
        <Link to='/green-grocery/shop' className='navbar-brand'>
          Shop
        </Link>
        <Link to='/contact' className='navbar-brand'>
          Contact
        </Link>
        <Cart openModal={openModal} showModal={showModal} closeModal={closeModal} />
      </div>
    </nav>
  );
};

export default MainNavigation;
