import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import ReactPaginate from "react-paginate";

import { eventAction } from "../../redux/actions";

import { DefaultLayout } from "../../layouts";
import { EventList } from "../../components";

const useStyles = makeStyles(theme => ({
  eventContainer: {
    flex: 1
  },
  pagination: {
    background: '#f00'
  }
}));

const HomePage = props => {
  const classes = useStyles();
  const { is_loaded, events, requestEvents } = props;

  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    requestEvents();
  }, []);

  const handlePageClick = (data) => {
    setPageNum(data.selected + 1);
  }

  return (
    <>
      <DefaultLayout>
        {!is_loaded ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <div className={classes.eventContainer}>
            <EventList events = {events.filter((val) => val.id <= 10*pageNum && val.id > 10*(pageNum - 1))} />
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.floor(events.length / 10) + 1}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={classes.pagination}
              activeClassName={"active"}
            />
          </div>
        )}
        {pageNum}
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
  };
}

const actionCreators = {
  requestEvents: eventAction.requestEvents
};

export default connect(mapStateToProps, actionCreators)(HomePage);
