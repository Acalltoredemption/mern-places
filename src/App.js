import React, {useState, useCallback} from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import {AuthContext} from './shared/context/Auth-Context';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
  <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
  <BrowserRouter>
  <MainNavigation />
  <main>
  <Switch>
  <Route path="/" component={Users} exact/>
  <Route path="/:userId/places"><UserPlaces /></Route>
  <Route path="/places/new" component={NewPlace} exact/>
  <Route path="/places/:placeId" component={UpdatePlace} exact />
  <Route path="/auth" component={Auth} exact />
  <Redirect to="/" />
  </Switch>
  </main>
  </BrowserRouter>
  </AuthContext.Provider>
  );
}

export default App;
