import Button from '../../UI/Button';

export const Order = ({ order }) => {
  const orderNumber = order.createdAt;
  const orderDate = new Date(orderNumber).toLocaleString('en-GB');
  const totalOrderPrice = order.items.reduce((sum, { price, amount }) => sum + price * amount, 0);
  const totalOrderItems = order.items.reduce((sum, { amount }) => sum + amount, 0);

  return (
    <div className='row align-items-center bg-body p-3 border'>
      <div className='col fs-6 pe-3'>
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
        {/* <div className='text-end'>
          <Button>Order again</Button>
          <Button>Check Details</Button>
        </div> */}
      </div>
    </div>
  );
};

export default Order;
