import Card from '../../UI/Card';

const ProductDetails = ({ name, price, amount }) => {
  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='col'>{name}</div>
        <div className='col'>{price}</div>
        <div className='col'>{amount}</div>
      </div>
    </div>
  );
};

export default ProductDetails;
