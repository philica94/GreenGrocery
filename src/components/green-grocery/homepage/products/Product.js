import { useState, useRef } from 'react';

import Card from '../../../UI/Card';
import ProductForm from './ProductForm';

import ProductInfo from './ProductInfo';

const Product = ({ id, name, price, image }) => {
  const [showFavouriteStar, setShowFavouriteStar] = useState(false);

  const mouseHoverHandler = () => {
    console.log('Show');
    setShowFavouriteStar(true);
  };

  const mouseLeaveHandler = () => {
    console.log('Hide');
    setShowFavouriteStar(false);
  };

  return (
    <div className='col-xxl-3 col-xl-4 col-md-6 col-12'>
      <Card onMouseEnter={mouseHoverHandler} onMouseLeave={mouseLeaveHandler}>
        <ProductInfo name={name} price={price} image={image} onShowStar={showFavouriteStar} />
        <ProductForm id={id} name={name} price={price} image={image} />
      </Card>
    </div>
  );
};

export default Product;
