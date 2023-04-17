import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/slices/cart';
import { getTotalAmount } from '../../../utilities/getTotalAmount';
import { getTotalPrice } from '../../../utilities/getTotalPrice';
import Button from '../../UI/Button';

export const Order = ({ order }) => {
  const dispatch = useDispatch();

  const orderNumber = order.createdAt;
  const orderDate = new Date(orderNumber).toLocaleString('en-GB');
  const orderedProducts = order.items.map(({ id, image }) => (
    <img className='mx-3' key={id} src={image} height='80px' />
  ));

  const totalOrderPrice = getTotalPrice(order.items);
  const totalOrderItems = getTotalAmount(order.items);

  const orderAgain = () => {
    const orderedCart = order.items.map(({ id, amount }) => ({ id, amount }));
    dispatch(cartActions.addEntireCart(orderedCart));
  };

  return (
    <div className='row align-items-center bg-body p-3 border my-3'>
      <div className='col-6 fs-6 pe-3'>
        <div className='fs-5 fw-bold mb-2'>Order Number: {orderNumber}</div>
        <div>
          Order Date: <span className='fw-bold'>{orderDate}</span>
        </div>
        <div>
          Total Price: <span className='fw-bold'>${totalOrderPrice}</span>
        </div>
        <div>
          Total Items: <span className='fw-bold'>{totalOrderItems}</span>
        </div>
      </div>
      <div className='col-6'>
        <div>{orderedProducts}</div>
      </div>
      <div className='row'>
        <div className='text-end gap-0 column-gap-3'>
          {/* <Button>Check Details</Button> */}
          <Button onClick={orderAgain}>Order again</Button>
        </div>
      </div>
    </div>
  );
};

export default Order;
