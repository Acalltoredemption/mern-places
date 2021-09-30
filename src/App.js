import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
  return <BrowserRouter>
  <MainNavigation />
  <main>
  <Switch>
  <Route path="/" component={Users} exact/>
  <Route path="/places/new" component={NewPlace} exact/>
  <Redirect to="/" />
  </Switch>
  </main>
  </BrowserRouter>;
}

export default App;
