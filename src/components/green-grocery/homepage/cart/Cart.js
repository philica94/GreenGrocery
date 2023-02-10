import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import Modal from '../../../UI/Modal';
import CartHeader from './CartHeader';
import CartProduct from './CartProduct';
import { selectTotalCartItemsPrice } from '../../../../store';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalItemsPrice = useSelector(selectTotalCartItemsPrice);
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const cartList = cart.items.map((item) => <CartProduct key={item.id} {...item} />);
  const emptyCart = <h5 className='d-flex justify-content-center m-5'>Your cart is empty...</h5>;

  const additionalContent = (
    <div className='d-block'>
      <h4>Total price: ${totalItemsPrice.toFixed(2)}</h4>
    </div>
  );

  const onOkClick = () => {
    closeModal();
    history.push('/green-grocery/checkout');
  };

  return (
    <>
      <CartHeader className='navbar-brand btn btn-outline-primary d-flex p-sm-2 p-1' openModal={openModal} />
      <Modal
        show={showModal}
        onClose={closeModal}
        header={<h3>Shopping Cart</h3>}
        footer={{
          additionalContent,
          onOkClick,
          okButtonText: 'To checkout',
          onCancelClick: () => {},
          cancelButtonText: 'Exit',
        }}
      >
        {cartList.length === 0 ? emptyCart : cartList}
      </Modal>
    </>
  );
};

export default Cart;
