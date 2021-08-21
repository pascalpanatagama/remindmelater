import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    // minWidth: 500
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ActivityList({ item, deleteActivity }) {
  const classes = useStyles();
  const { id, activityTitle, description, needToBeReminded, remindedAt } = item

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="Delete" onClick={()=>deleteActivity(id)}>
            <CloseIcon />
          </IconButton>
        }
        title={activityTitle}
        // subheader="September 14, 2016"
      />
      <CardContent>
        <Typography>{description}</Typography>
        { needToBeReminded ? <Typography>Due : {remindedAt.getDate()}/{remindedAt.getMonth()+1}/{remindedAt.getFullYear()}</Typography> : ""}
      </CardContent>
      <CardActions disableSpacing>

      </CardActions>
    </Card>
  );
}
