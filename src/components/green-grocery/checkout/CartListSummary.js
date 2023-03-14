import { useDispatch, useSelector } from 'react-redux';

import useFocus from '../../../hooks/useFocus';
import { useModal } from '../../../hooks/useModal';
import { selectTotalCartItemsPrice } from '../../../store/slices/cart';
import CartItem from '../homepage/cart/CartItem';
import Button from '../../UI/Button';
import Modal from '../../UI/Modal';
import { ordersActions } from '../../../store/slices/orders';

const CartListSummary = ({ setInputRefFocus }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const totalItemsPrice = useSelector(selectTotalCartItemsPrice).toFixed(2);

  const cartList = cart.items.map((item) => <CartItem key={item.id} {...item} />);

  const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [buttonRef, setButtonRefFocus] = useFocus();
  const {
    showModal,
    openModal: openModalHandler,
    closeModal: closeModalHandler,
  } = useModal({ afterOpening: setButtonRefFocus, afterClosing: setInputRefFocus });

  const order = () => {
    if (userLoggedIn) {
      dispatch(ordersActions.order());
    } else {
      openModalHandler();
    }
  };

  const messageContent = (
    <div>
      <p className='text-center m-5 fs-4 lh-base text-break'>If you want to finish your order, please sign in.</p>
      <div className='text-center mb-4'>
        <Button className='btn-outline-success btn-lg' onClick={closeModalHandler} ref={buttonRef}>
          Continue
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <div className='row justify-content-md-center'>
        <div className='col-md-10 bg-body'>
          {cartList}
          <div className='row align-items-center p-3 border'>
            <div className='col text-end'>
              <span className='fs-4 pe-3'>Total price: ${totalItemsPrice}</span>
              <Button onClick={order}>Order</Button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={closeModalHandler} header={<h3>Oops!</h3>}>
        {messageContent}
      </Modal>
    </>
  );
};
export default CartListSummary;
