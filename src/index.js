// Set up your application entry point here...
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import { Provider} from 'react-redux';
import store, { history } from './store/index';

import App from './containers/App';
import Single from './containers/Single';
import PhotoGrid from './containers/PhotoGrid';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}/>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);


render(router, document.getElementById('app'));
