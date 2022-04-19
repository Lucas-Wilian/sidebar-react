import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>

      <Route exact path='/statistics'>
        <h1>Statistics</h1>
      </Route>

      <Route exact path='/customers'>
        <h1>Customers</h1>
      </Route>

      <Route exact path='/diagrams'>
        <h1>Diagrams</h1>
      </Route>
    </Switch>
  );
};
