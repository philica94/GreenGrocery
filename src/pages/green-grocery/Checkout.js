import CartListInCheckout from '../../components/green-grocery/checkout/CartListInCheckout';
import OrderWithoutRegistrationForm from '../../components/green-grocery/checkout/OrderWithoutRegistrationForm';

const Checkout = () => {
  return (
    <>
      <CartListInCheckout />
      <OrderWithoutRegistrationForm />
    </>
  );
};

export default Checkout;
