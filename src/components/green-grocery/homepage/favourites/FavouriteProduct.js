import { Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../../../store/slices/cart';
import { favouriteActions } from '../../../../store/slices/favourites';
import Button from '../../../UI/Button';
import AddOrRemoveFromFavourites from './AddOrRemoveFromFavourites';

export const FavouriteProduct = ({ id, name, image }) => {
  const dispatch = useDispatch();

  const addOneQuantityProductHandler = () => {
    dispatch(cartActions.increaseCartItemAmount(id));
    dispatch(favouriteActions.toggleFavourite(id));
  };

  return (
    <Fragment key={id}>
      <div className='d-flex justify-content-between m-2'>
        <div className='d-flex align-items-center gap-3'>
          <img src={image} height='50px' />
          <span className='fs-4 fw-semibold'>{name}</span>
        </div>
        <AddOrRemoveFromFavourites />
        <div className='d-flex align-items-center flex'>
          <Button onClick={addOneQuantityProductHandler}>Add to Cart</Button>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};
