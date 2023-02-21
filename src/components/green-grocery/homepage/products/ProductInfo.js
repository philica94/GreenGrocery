import { useDispatch, useSelector } from 'react-redux';
import { favouriteActions } from '../../../../store/slices/favourite';

import { Star, StarFill } from 'react-bootstrap-icons';
import classes from './ProductInfo.module.css';

const ProductInfo = ({ id, name, price, image, favouriteClass }) => {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favourite.id.includes(id));

  const toggleFavouriteHandler = () => {
    dispatch(favouriteActions.toggleFavourite(id));
  };

  return (
    <div>
      {!favourite && (
        <span className={`${classes.starPosition} ${favouriteClass}`} onClick={toggleFavouriteHandler}>
          <Star size={25} />
        </span>
      )}
      {favourite && (
        <span className={classes.starPosition} onClick={toggleFavouriteHandler}>
          <StarFill size={25} />
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
