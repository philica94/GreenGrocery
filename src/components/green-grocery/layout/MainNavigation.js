import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../UI/Modal';
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
        <Link className='navbar-brand'>Contact</Link>
        <CartHeader className='navbar-brand btn btn-outline-primary d-flex p-sm-2 p-1' openModal={openModal} />
        <Modal show={showModal} onClose={closeModal} header={<span>Shopping Cart</span>}>
          Products...
        </Modal>
      </div>
    </nav>
  );
};

export default MainNavigation;
