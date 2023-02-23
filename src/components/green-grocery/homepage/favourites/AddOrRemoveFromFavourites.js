import { useDispatch, useSelector } from 'react-redux';
import { favouriteActions } from '../../../../store/slices/favourites';

import { Star, StarFill } from 'react-bootstrap-icons';
import classes from './AddOrRemoveFromFavourites.module.css';

const AddOrRemoveFromFavourites = ({ id }) => {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favourite.id.includes(id));

  const toggleFavouriteHandler = () => {
    dispatch(favouriteActions.toggleFavourite(id));
  };

  const cssClasses = `${classes.starPosition} ${classes.starWrapper} ${favourite ? classes.isAddedToFavourite : ''}`;
  const StarComponent = favourite ? StarFill : Star;
  return (
    <span className={cssClasses} onClick={toggleFavouriteHandler}>
      <StarComponent size={20} />
    </span>
  );
};

export default AddOrRemoveFromFavourites;
