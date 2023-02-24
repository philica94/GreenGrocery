import { useDispatch, useSelector } from 'react-redux';
import { favouriteActions } from '../../../../store/slices/favourites';

import { Star, StarFill } from 'react-bootstrap-icons';
import classes from './AddOrRemoveFromFavourites.module.css';

const VARIANTS = {
  shopProduct: {
    size: 20,
    cssClass: 'starPosition',
  },
  favourite: {
    size: 15,
    cssClass: '',
  },
};

const AddOrRemoveFromFavourites = ({ id, variant }) => {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favourite.id.includes(id));

  const toggleFavouriteHandler = () => {
    dispatch(favouriteActions.toggleFavourite(id));
  };

  const { size, cssClass } = VARIANTS[variant];

  const cssClasses = `${classes[cssClass]} ${classes.starWrapper} ${favourite ? classes.isAddedToFavourite : ''}`;
  const StarComponent = favourite ? StarFill : Star;
  return (
    <span className={cssClasses} onClick={toggleFavouriteHandler} role='button'>
      <StarComponent size={size} />
    </span>
  );
};

export default AddOrRemoveFromFavourites;
