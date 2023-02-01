import React from 'react';
import { Route } from 'react-router-dom';

import MainNavigation from '../components/green-grocery/layout/MainNavigation';
import ProductList from '../components/green-grocery/products/ProductList';
import Modal from '../components/UI/Modal';

const GreenGrocery = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <Route path='/green-grocery/shop' exact>
        <ProductList />
      </Route>
    </React.Fragment>
  );
};

export default GreenGrocery;
