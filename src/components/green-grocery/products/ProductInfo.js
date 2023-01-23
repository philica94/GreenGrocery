const ProductInfo = ({ name, price }) => {
  return (
    <div>
      <h5 className='card-title'>{name}</h5>
      <p className='card-text'>{price}$</p>
      <span className='fs-4 m-1'></span>
    </div>
  );
};

export default ProductInfo;
