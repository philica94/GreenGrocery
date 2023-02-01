import { useSelector } from 'react-redux';
import Modal from '../../UI/Modal';
import CartHeader from '../layout/CartHeader';
import CartProduct from './CartProduct';

const Cart = ({ openModal, showModal, closeModal }) => {
  const cart = useSelector((state) => state.cart);

  const cartList = cart.items.map((item) => <CartProduct key={item.id} {...item} />);

  return (
    <>
      <CartHeader className='navbar-brand btn btn-outline-primary d-flex p-sm-2 p-1' openModal={openModal} />
      <Modal show={showModal} onClose={closeModal} header={<h3>Shopping Cart</h3>}>
        {cartList}
      </Modal>
    </>
  );
};

export default Cart;
