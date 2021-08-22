import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: "column",
    '& > *': {
      width: 'auto',
      height: 'auto',
    },
  },
}));

export default function SimplePaper({ data }) {
  const classes = useStyles();

  let today = new Date()
  data = data.filter(i => (i.needToBeReminded === true && i.remindedTime > today.getTime()))

  return (
    <div className={classes.root}>
        {data.map(item => (
            <Paper key={item.id} elevation={3} >
                <Typography>{item.activityTitle}</Typography>
                { (item.remindedAt === new Date().toLocaleDateString() && item.continue) ?
                    <Typography>{item.renewAt}</Typography>
                  : <Typography>{item.remindedAt}</Typography>
                }
                {item.continue ? <Typography>Renew every {item.every} days</Typography> : ""}
            </Paper>
        ))}

    </div>
  );
}