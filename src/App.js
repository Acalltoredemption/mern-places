import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UpdatePlace from './places/pages/UpdatePlace';


function App() {
  return <BrowserRouter>
  <MainNavigation />
  <main>
  <Switch>
  <Route path="/" component={Users} exact/>
  <Route path="/:userId/places"><UserPlaces /></Route>
  <Route path="/places/new" component={NewPlace} exact/>
  <Route path="/places/:placeId" component={UpdatePlace} exact />
  <Redirect to="/" />
  </Switch>
  </main>
  </BrowserRouter>;
}

export default App;
