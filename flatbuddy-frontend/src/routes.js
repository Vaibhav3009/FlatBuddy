import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HobbiesAndHabits from './components/hobbiesAndHabits';
// import GoogleMapComponent from './components/GoogleMap';
import LeftSideBar from './components/leftSideBar';
import Dashboard from './components/dashboard';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      </Switch>
  );
}

export default Routes;