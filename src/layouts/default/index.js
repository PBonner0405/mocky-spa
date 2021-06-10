import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import Header from './header';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const DefaultLayout = ({children}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Header />
        <div>
          {children}
        </div>
      </Container>
    </div>
  );
};

export default DefaultLayout;
