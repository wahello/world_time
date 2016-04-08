import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from 'views/layout/layout.jsx';
import Notfound from 'views/errors/not_found.jsx';

// import Page from 'views/products/search';
// import ProductSearch from 'views/products/search';
// import Login from 'views/users/login';
// import auth from 'lib/auth';

// const requireAuth = (nextState, replace) => {
//   if (!auth.loggedIn()) {
//     replace({
//       pathname: '/login',
//       state: { nextPathname: nextState.location.pathname }
//     });
//   }
// }

const routes =
  <Router history={ hashHistory }>
    <Route path='/' component={ Layout } />
    <Route path="*" component={ Notfound } />
  </Router>

export default routes


// <Router history={ hashHistory }>
// <IndexRoute component={ ProductSearch } onEnter={ requireAuth } />
// <Route path="login" component={ Login } />