import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
    </Switch>
  );
};