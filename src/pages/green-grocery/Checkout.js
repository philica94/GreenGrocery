import { useSelector } from 'react-redux';

import CartListSummary from '../../components/green-grocery/checkout/CartListSummary';
import OrderWithoutRegistrationForm from '../../components/green-grocery/checkout/OrderWithoutRegistrationForm';
import Login from '../../components/green-grocery/login/Login';
import useFocus from '../../hooks/useFocus';

const Checkout = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartIsEmpty = useSelector((state) => state.cart.items.length === 0);

  const [inputRef, setInputRefFocus] = useFocus();

  return (
    <>
      {!cartIsEmpty && <CartListSummary setInputRefFocus={setInputRefFocus} />}
      {!isLoggedIn && (
        <Login headerContent='I already have an account' pathTo='/green-grocery/checkout' usernameRef={inputRef} />
      )}
      {/* {!isLoggedIn && <OrderWithoutRegistrationForm />} */}
    </>
  );
};

export default Checkout;
