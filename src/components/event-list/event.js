import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import { eventAction } from "../../redux/actions";

const useStyles = makeStyles({
  root: {
    flex: 1,
    marginBottom: '6px'
  }
});

const Event = ({ payload, changeEntry }) => {
  const classes = useStyles();

  const [viewSport, setViewSport] = useState(false);
  const [viewTournament, setViewTournament] = useState(false);
  const [viewprizePools, setViewprizePools] = useState(false);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography gutterBottom variant="h5" component="h2">
              {payload.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="h3">
              {payload.eventID}
            </Typography>
          </Grid>
        </Grid>

        <List component="nav" aria-labelledby="sports-info">
          <ListItem button onClick={() => setViewSport(!viewSport)}>
            {payload.sport.imageUrl !== "" && (
              <ListItemAvatar>
                <Avatar alt="Sport Image" src={payload.sport.imageUrl} />
              </ListItemAvatar>
            )}
            <ListItemText primary="Sport Info" />
            {viewSport ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={viewSport} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem className={classes.nested}>
                <ListItemText primary="SportID: " />
                <ListItemText primary={payload.sport.sportID} />
              </ListItem>
              <ListItem className={classes.nested}>
                <ListItemText primary="Sport Name: " />
                <ListItemText primary={payload.sport.name} />
              </ListItem>
              <ListItem className={classes.nested}>
                <ListItemText primary="Abbreviation: " />
                <ListItemText primary={payload.sport.abbreviation} />
              </ListItem>
            </List>
          </Collapse>
        </List>

        <List component="nav" aria-labelledby="tournament-info">
          <ListItem button onClick={() => setViewTournament(!viewTournament)}>
            <ListItemText primary="Tournament Info" />
            {viewTournament ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={viewTournament} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem className={classes.nested}>
                <ListItemText primary="Tournament ID: " />
                <ListItemText primary={payload.tournament.tournamentID} />
              </ListItem>
              <ListItem className={classes.nested}>
                <ListItemText primary="Tournament Name: " />
                <ListItemText primary={payload.tournament.name} />
              </ListItem>
              <ListItem className={classes.nested}>
                <ListItemText primary="Tournament Stage: " />
                <ListItemText primary={payload.tournament.stage} />
              </ListItem>
            </List>
          </Collapse>
        </List>

        <List component="nav" aria-labelledby="prizePools-info">
          <ListItem button onClick={() => setViewprizePools(!viewprizePools)}>
            <ListItemText primary="PrizePools Info" />
            {viewprizePools ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={viewprizePools} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem className={classes.nested}>
                <ListItemText primary="Winnings PrizePool Amount: " />
                <ListItemText primary={payload.prizePools.winningsPrizePoolAmount} />
              </ListItem>
              <ListItem className={classes.nested}>
                <ListItemText primary="Bonus PrizePool Amount: " />
                <ListItemText primary={payload.prizePools.bonusPrizePoolAmount} />
              </ListItem>
            </List>
          </Collapse>
        </List>

        <Grid container justify="space-between">
          <Grid item>
            <Typography gutterBottom variant="subtitle1" component="h2">
              Go Live At: {payload.goLiveAt}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="subtitle1" component="h3">
              Match Series: {payload.matchSeries}
            </Typography>
          </Grid>
        </Grid>

      </CardContent>
      <CardActions>
        <Button size="medium" color="primary" onClick={() => changeEntry(payload.eventID)}>
          {
            payload.is_entry ? 'Remove from Entries' : 'Add to Entries'
          }
        </Button>
      </CardActions>
    </Card>
  );
};

Event.propTypes = {
  changeEntry: PropTypes.func.isRequired
};

const actionCreators = {
  changeEntry: eventAction.changeEntry
};

export default connect(null ,actionCreators)(Event);