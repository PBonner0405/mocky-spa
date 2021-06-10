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
    background: "#24c2f1",
    display: "flex",
    flexDirection: "row",
    borderRadius: "2px",
    color: "white",
    minHeight: "36px",
    justifyContent: "center",
    alignItems: "center",
    listStyleType: "none",

    "& li": {
      display: "flex",
      fontSize: "16px",
      cursor: "pointer",
      height: "32px",
      width: "32px",
      alignItems: "center",
      justifyContent: "center",
      margin: "4px"
    },

    "& li:hover": {
      color: "#0879da",
      fontWeight: "bold",
      border: "2px solid #086077"
    },

    "& li.active": {
      color: "#0879da",
      borderRadius: " 50%",
      fontWeight: "bold",
      border: "2px solid #086077"
    },

    "& li.disabled": {
      color: "#000",
      cursor: 'not-allowed'
    },

    "&li > a": {
      padding: "0 8px"
    }
  }
}));

const HomePage = props => {
  const classes = useStyles();
  const { is_loaded, events, requestEvents } = props;
  const eventPerPage = 5;

  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    requestEvents();
  }, [requestEvents]);

  const handlePageClick = data => {
    setPageNum(data.selected + 1);
  };

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
            <EventList
              events={events.filter(
                val => val.id <= eventPerPage * pageNum && val.id > eventPerPage * (pageNum - 1)
              )}
            />
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.floor(events.length / eventPerPage) + 1}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={classes.pagination}
              activeClassName={"active"}
            />
          </div>
        )}
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

function mapStateToProps(state) {
  return {
    is_loaded: state.event.is_loaded,
    events: state.event.events
  };
}

const actionCreators = {
  requestEvents: eventAction.requestEvents
};

export default connect(mapStateToProps, actionCreators)(HomePage);
