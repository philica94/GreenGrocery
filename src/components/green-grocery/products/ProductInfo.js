const ProductInfo = ({ name, price }) => {
  return (
    <div>
      <h6 className='m-5'>img</h6>
      <h4 className='card-title'>{name}</h4>
      <p className='card-text'>${price}</p>
    </div>
  );
};

export default ProductInfo;
