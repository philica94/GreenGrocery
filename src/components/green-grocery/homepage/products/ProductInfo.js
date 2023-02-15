const ProductInfo = ({ name, price, image }) => {
  return (
    <div>
      <h6 className='m-3'>
        <img src={image} height='150px' />
      </h6>
      <h4 className='card-title'>{name}</h4>
      <span className='card-text fs-5'>${price}</span>
    </div>
  );
};

export default ProductInfo;
