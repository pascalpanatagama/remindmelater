import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import ButtonIcon from './ButtonIcon';
import AddActivity from './AddActivity';

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

export default function RecipeReviewCard({ item, deleteFunction, addActivity }) {
  const { id, title } = item
  const classes = useStyles();
  const [addSub, setAddSub] = React.useState(false)
  const [activityList, setActivityList] = React.useState([])
  const [activityData, setActivityData] = React.useState([])
  
  const handleAddSubtitle = () => {
    setAddSub(!addSub)
  }

  
  const handleAddActivity = (data) => {
    setActivityData(data)
  }
  
  

  useEffect(()=>{
    // localStorage.setItem(`activityList${id}`, JSON.stringify(activityData))
    addActivity(activityData)
  })


  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="Delete" onClick={()=>deleteFunction(id)}>
            <CloseIcon />
          </IconButton>
        }
        title={title}
        // subheader="September 14, 2016"
      />
      <CardContent>
        {activityData.map(item => (
          <div key={item.id}>s{item.activityTitle}</div>
        ))}
      </CardContent>
      <CardActions disableSpacing>
          {addSub ? <AddActivity handleClick={handleAddSubtitle} handleAddActivity={handleAddActivity} listId={id}/> : <ButtonIcon handleClick={handleAddSubtitle} />}
      </CardActions>
    </Card>
  );
}
