import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    heading: {
      color: 'white'
    }
  }));

const Header = () => {
    
  const classes = useStyles();

    return <AppBar position="static">
        <Toolbar>
            <Typography variant='h6' className={classes.heading}>
                TokiGames
            </Typography>
        </Toolbar>
    </AppBar>
}

export default Header;