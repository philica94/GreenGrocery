import React from 'react';
import { Route } from 'react-router-dom';

import MainNavigation from '../components/green-grocery/homepage/layout/MainNavigation';
import ProductList from '../components/green-grocery/homepage/products/ProductList';

const GreenGrocery = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <Route path='/green-grocery' exact>
        <ProductList />
      </Route>
    </React.Fragment>
  );
};

export default GreenGrocery;
