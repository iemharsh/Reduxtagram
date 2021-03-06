import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './Main';


import * as actionCreators from '../actions/actionCreators';


function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
