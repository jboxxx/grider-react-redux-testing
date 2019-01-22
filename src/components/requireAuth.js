import React from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends React.Component {
    // our component get got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }


  const mapStateToProps = (state) => {
    return { auth: state.auth };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
