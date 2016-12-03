// Set up your application entry point here...
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';


import Main from './containers/Main';
import Single from './containers/Single';
import PhotoGrid from './containers/PhotoGrid';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}/>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
);


render(router, document.getElementById('app'));
