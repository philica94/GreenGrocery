import { useSelector } from 'react-redux';

import CartListSummary from '../../components/green-grocery/checkout/CartListSummary';
import OrderWithoutRegistrationForm from '../../components/green-grocery/checkout/OrderWithoutRegistrationForm';
import Login from '../../components/green-grocery/login/Login';

const Checkout = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartIsEmpty = useSelector((state) => state.cart.items.length === 0);

  return (
    <>
      {!cartIsEmpty && <CartListSummary />}
      {!isLoggedIn && <Login headerContent='I already have an account' />}
      {!isLoggedIn && <OrderWithoutRegistrationForm />}
    </>
  );
};

export default Checkout;
