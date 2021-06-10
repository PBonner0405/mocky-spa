import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { eventAction } from '../../redux/actions';

import { DefaultLayout } from "../../layouts";

const HomePage = (props) => {

  const { is_loaded, events, requestEvents } = props;

  useEffect(() => {
    requestEvents();
  }, [])

  return (
    <>
      <DefaultLayout>
        {
          !is_loaded ? <div>Loading ....</div> : <div> Loaded</div>
        }
        <div>This is Home Page</div>
      </DefaultLayout>
    </>
  );
};

HomePage.defaultProps = {
  is_loaded: false,
  events: []
};

HomePage.propTypes = {
  requestEvents: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
  return {
    is_loaded: state.event.is_loaded,
    events: state.event.events
  }
};

const actionCreators = {
  requestEvents: eventAction.requestEvents
}

export default connect(mapStateToProps, actionCreators)(HomePage);
