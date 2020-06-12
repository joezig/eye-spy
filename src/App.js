import React from 'react';

import NewPlace from './places/pages/new-place';
import Users from './user/pages/users';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' >
          <Users />
        </Route>
        <Route exact path='/places/new'>
          <NewPlace />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
