import React from 'react';
import { Route } from 'react-router-dom';

import MainNavigation from '../components/green-grocery/layout/MainNavigation';
import Shop from '../components/green-grocery/homepage/Shop';
import Login from '../components/green-grocery/login/Login';
import Checkout from './green-grocery/Checkout';

const GreenGrocery = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className='container'>
        <Route path='/green-grocery' exact>
          <Shop />
        </Route>
        <Route path='/green-grocery/login'>
          <Login headerContent='Sign in' pathTo='/green-grocery' />
        </Route>
        <Route path='/green-grocery/checkout'>
          <Checkout />
        </Route>
      </main>
    </React.Fragment>
  );
};

export default GreenGrocery;
