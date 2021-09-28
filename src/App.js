import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

function App() {
  return <BrowserRouter>
  <Switch>
  <Route path="/" component={Users} exact/>
  <Route path="/places/new" component={NewPlace} exact/>
  <Redirect to="/" />
  </Switch>
  </BrowserRouter>;
}

export default App;
