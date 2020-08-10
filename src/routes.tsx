import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Histories } from './pages';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/histories" component={Histories} />
    </Switch>
  );
};

export default Routes;
