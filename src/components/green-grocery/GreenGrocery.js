import React from 'react';

import MainNavigation from './layout/MainNavigation';
import ProductList from './products/ProductList';

const GreenGrocery = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <ProductList />
    </React.Fragment>
  );
};

export default GreenGrocery;
