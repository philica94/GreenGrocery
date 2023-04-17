import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Modal from '../../../UI/Modal';
import CartHeader from './CartHeader';
import CartProduct from './CartProduct';
import { getCartItemsWithDetails, selectTotalCartItemsPrice } from '../../../../store/slices/cart';
import { useModal } from '../../../../hooks/useModal';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const filteredCartItems = getCartItemsWithDetails(cart);

  const totalItemsPrice = useSelector(selectTotalCartItemsPrice);
  const history = useHistory();
  const { showModal, openModal: openModalHandler, closeModal: closeModalHandler } = useModal();

  const cartList = filteredCartItems.map((item) => <CartProduct key={item.id} {...item} />);
  const emptyCartMessage = <h5 className='d-flex justify-content-center m-5'>Your cart is empty...</h5>;

  const additionalContent = (
    <div className='d-block'>
      <h4>Total price: ${totalItemsPrice}</h4>
    </div>
  );

  const onOkClick = () => {
    closeModalHandler();
    history.push(`/green-grocery/${cartList.length === 0 ? '' : 'checkout'}`);
  };

  const onCancelClick = () => {
    closeModalHandler();
  };

  const emptyCartCondition = cartList.length === 0 ? 'To shop' : 'To checkout';

  return (
    <>
      <CartHeader openModal={openModalHandler} />
      <Modal
        show={showModal}
        onClose={closeModalHandler}
        header={<h3>Shopping Cart</h3>}
        footer={{
          additionalContent,
          onOkClick,
          okButtonText: emptyCartCondition,
          onCancelClick,
          cancelButtonText: 'Exit',
        }}
      >
        {cartList.length === 0 ? emptyCartMessage : cartList}
      </Modal>
    </>
  );
};

export default Cart;
