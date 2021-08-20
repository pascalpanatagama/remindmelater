import './App.css';
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormTitle from "./component/FormTitle"
import ButtonIcon from './component/ButtonIcon';
// import { Typography } from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import CardList from './component/CardList'

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

document.body.style.backgroundColor = "#297F87"

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  imageList: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function App() {
  const classes = useStyles();

  const [isAdd, setIsAdd] = useState(false)
  const [title, setTitle] = useState("")
  const [listToShow, setListToShow] = useState([])
  const [open, setOpen] = useState(false);
  const [activityList, setActivityList] = useState([])

  const handleClick = () => {
    setIsAdd(!isAdd)
  }

  const handleInputText = (e) => {
    setTitle(e.target.value)
  }

  const handleCreateList = () => {
    if (title.trim().length !== 0){
      const newList = {
        id: listToShow.length,
        title: title
      }
      // listToShow.push(newList)
      setListToShow([...listToShow,newList])
      setIsAdd(!isAdd)
      setTitle("")
    } else {
      setOpen(!open)
    }
  }

  const deleteList = (id) => {
    const data = listToShow.filter(i => i.id !== id)
    setListToShow(data)
    console.log(listToShow)
  }


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const addActivity = (activityData) => {
    // setActivityList()
    console.log(activityData[0].continue)
  }

  useEffect(() => {
    console.log(activityList)
  })


  return (
    <div className="App">
      <div className="content-left">
        <h2>Your List</h2>
        <p>Button</p>
        {isAdd ? (
          <FormTitle handleClick={handleClick} handleInputText={handleInputText} handleCreateList={handleCreateList} />
        ) : (
          <ButtonIcon handleClick={handleClick}/>
        )
        }
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Please add title
          </Alert>
        </Snackbar>
      </div>

      <div className="content-center">
        <h2>Show List</h2>
        
          <ImageList rowHeight="auto" className={classes.imageList} cols={2}>
          {listToShow.map((item) => (
            <ImageListItem key={item.id} cols={item.cols || 1}>
              <CardList item={item} deleteFunction={deleteList} addActivity={addActivity} />
              {/* <Typography>{item.id}</Typography>
              <Typography>{item.title}</Typography> */}
              {/* <img src={item.img} alt={item.title} /> */}
            </ImageListItem>
          ))}
          </ImageList>
          
      </div>

      <div className="content-right">
        <h2>Upcoming Events</h2>
      </div>

    </div>
  );
}

export default App;
