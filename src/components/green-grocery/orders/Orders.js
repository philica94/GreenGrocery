import { useSelector } from 'react-redux';
import Order from './Order';

const Orders = () => {
  const orders = useSelector((state) => state.orders.orders);
  const loggedUserEmail = useSelector((state) => state.auth.loggedUserEmail);

  const filteredLoggedUserOrders = orders.filter(({ userEmail }) => userEmail === loggedUserEmail);
  const ordersList = filteredLoggedUserOrders
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((order) => <Order key={order.createdAt} order={order} />);

  return (
    <div className='row justify-content-md-center'>
      <div className='col-md-10'>
        <div className='m-3 fs-3 pe-3'>Orders</div>
        {ordersList}
      </div>
    </div>
  );
};

export default Orders;
