import React from 'react';
import { Link } from 'react-router';
class Main extends React.Component {
  render() {
    const children = this.props.children;
    return(
      <div>
        <h1>
          <Link to="/">Reduxtagram</Link>
        </h1>
        { React.Children.map( children, child => React.cloneElement(child, {...this.props}))}
      </div>
    );
  }
}

export default Main;
