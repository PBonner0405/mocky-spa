import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  heading: {
    color: "white"
  },
  toolbar: {
      display: 'flex',
      justifyContent: 'space-between'
  }
}));

const Header = ({ events }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.heading}>
          TokiGames
        </Typography>

        <Typography variant="h6" className={classes.heading}>
          {events.filter(val => val.is_entry).length}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  events: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    events: state.event.events
  };
}

export default connect(mapStateToProps, null)(Header);
