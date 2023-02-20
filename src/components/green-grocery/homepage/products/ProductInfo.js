import classes from './ProductInfo.module.css';

import { Star } from 'react-bootstrap-icons';

const ProductInfo = ({ name, price, image, onShowStar }) => {
  return (
    <div>
      {onShowStar && (
        <span className={classes.starPosition}>
          <Star size={25} />
        </span>
      )}
      <h6 className='m-3'>
        <img src={image} height='150px' />
      </h6>
      <h4 className='card-title'>{name}</h4>
      <span className='card-text fs-5'>${price}</span>
    </div>
  );
};

export default ProductInfo;
