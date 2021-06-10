import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2021 Copyright
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
