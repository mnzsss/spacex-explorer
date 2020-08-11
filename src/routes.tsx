import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Histories, Launches } from './pages';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/histories" component={Histories} />
      <Route path="/launches" component={Launches} />
    </Switch>
  );
};

export default Routes;
