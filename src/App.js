import { Route, Switch } from 'react-router-dom';

import GreenGrocery from './pages/GreenGrocery';
import LandingPage from './pages/LandingPage';

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
