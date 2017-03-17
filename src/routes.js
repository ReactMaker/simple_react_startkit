import React from 'react';
import { IndexRoute, Route } from 'react-router';

import {
  App,
  Home,
  NotFound,
} from 'containers';

export default (
  <Route path="/" component={App}>
    { /* Main route */ }
    <IndexRoute component={Home} />
    { /* Routes */ }

    { /* Catch all route */ }
    <Route path="*" component={NotFound}/>
  </Route>
);
