import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import MainNavigation from './shared/components/navigation/main-navigation';
import NewPlace from './places/pages/new-place';
import UpdatePlace from './places/pages/update-place';
import UserPlaces from './places/pages/user-places';
import Users from './user/pages/users';

import './App.css';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path='/'>
            <Users />
          </Route>
          <Route exact path='/:userId/places'>
            <UserPlaces />
          </Route>
          <Route exact path='/places/new'>
            <NewPlace />
          </Route>
          <Route exact path='/places/:placeId'>
            <UpdatePlace />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
