import {createStore} from 'redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import posts from './../data/posts';
import comments from '../data/comments';
import rootReducer from './../reducers/index';

const defaultState = { posts, comments };

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
