import { Route, Switch } from 'react-router-dom';

import GreenGrocery from './components/green-grocery/GreenGrocery';
import LandingPage from './components/landing-page/LandingPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/green-grocery'>
          <GreenGrocery />
        </Route>
        <Route path='*'>
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
