import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import Header from './header';
import Footer from './footer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  },
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    flex: 1
  }
}));

const DefaultLayout = ({children}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Header />
        <div className={classes.main}>
          {children}
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default DefaultLayout;
