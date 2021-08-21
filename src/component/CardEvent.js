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

  data = data.filter(i => i.needToBeReminded === true)

  return (
    <div className={classes.root}>
        {data.map(item => (
            <Paper key={item.id} elevation={3} >
                <Typography>{item.activityTitle}</Typography>
                { (item.remindedAt.getTime() < new Date().getTime() + 10 && item.continue) ?
                    <Typography>{item.renewAt.toLocaleDateString()}</Typography>
                  : <Typography>{item.remindedAt.toLocaleDateString()}</Typography>
                }
                <Typography>{item.remindedAt.toLocaleDateString()} - {new Date().toLocaleDateString()}</Typography>
                {item.continue ? <Typography>Renew every {item.every} days</Typography> : ""}
            </Paper>
        ))}

    </div>
  );
}