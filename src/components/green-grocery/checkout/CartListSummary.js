import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useModal } from '../../../hooks/useModal';
import { cartActions, getCartItemsWithDetails, selectTotalCartItemsPrice } from '../../../store/slices/cart';
import { ordersActions } from '../../../store/slices/orders';
import { setHtmlElementFocus } from '../../../utilities/setHtmlElementFocus';
import CartItem from '../homepage/cart/CartItem';
import Modal from '../../UI/Modal';
import Button from '../../UI/Button';
import { Check2Circle } from 'react-bootstrap-icons';

const CartListSummary = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart);

  const filteredCartItems = getCartItemsWithDetails(cart);
  const userEmail = useSelector((state) => state.auth.loggedUserEmail);
  const totalItemsPrice = useSelector(selectTotalCartItemsPrice);
  const cartIsEmpty = useSelector((state) => state.cart.items.length === 0);

  const cartList = filteredCartItems.map((item) => <CartItem key={item.id} {...item} />);

  const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const {
    showModal,
    openModal: openModalHandler,
    closeModal: closeModalHandler,
  } = useModal({
    afterOpening: () => setHtmlElementFocus('login-required-modal-btn'),
    afterClosing: () => setHtmlElementFocus('loginEmail'),
  });

  const order = () => {
    if (userLoggedIn) {
      openModalHandler();
      dispatch(ordersActions.order({ filteredCartItems, userEmail }));
      dispatch(cartActions.removeEntireCart());
    } else {
      openModalHandler();
    }
  };

  const modalHeaderText = userLoggedIn ? null : <h3>Oops!</h3>;

  const goToShopAfterOrder = () => history.push('/green-grocery');

  const unloggedUserMessage = (
    <p className='text-center m-5 fs-4 lh-base text-break'>If you want to finish your order, please sign in.</p>
  );
  const orderConfirmedMessage = (
    <div className='text-center m-5'>
      <span>
        <Check2Circle size={60} color={'rgba(var(--bs-success-rgb)'} />
      </span>
      <h3 className='pt-4'>Order Successful</h3>
      <p className='fs-4 lh-base text-break'>Thank you so much for your order.</p>
    </div>
  );

  const messageContent = (
    <div>
      {userLoggedIn ? orderConfirmedMessage : unloggedUserMessage}
      <div className='text-center mb-4'>
        <Button
          id='login-required-modal-btn'
          className='btn-outline-success btn-lg'
          onClick={userLoggedIn ? goToShopAfterOrder : closeModalHandler}
        >
          Continue
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {cartIsEmpty || (
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
      )}
      <Modal show={showModal} onClose={closeModalHandler} header={modalHeaderText}>
        {messageContent}
      </Modal>
    </>
  );
};
export default CartListSummary;
