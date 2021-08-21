import './App.css';
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormTitle from "./component/FormTitle"
import ButtonIcon from './component/ButtonIcon';
// import { Typography } from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import CardList from './component/CardList'
import CardEvent from './component/CardEvent'

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
        id:  listToShow.length === 0 ? listToShow.length : listToShow[listToShow.length-1].id + 1,
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

    const dataActivity = activityList.filter(i => i.listId !== id)
    setActivityList(dataActivity)
  }


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  const defineValues = (activityTitle, description, needToBeReminded, isContinuous, counter, startDate, listId) => {
    if(activityTitle.trim().length !== 0){
      const newActivity = {
        id: activityList.length === 0 ? activityList.length : activityList[activityList.length-1].id + 1,
        activityTitle: activityTitle,
        description: description,
        needToBeReminded: needToBeReminded,
        continue: isContinuous,
        remindedAt: startDate,
        every: counter,
        listId: listId
      }
      setActivityList([...activityList, newActivity])
    } else {
      setOpen(!open)
    }
  }

  const deleteActivity = (id) => {
    const data = activityList.filter(i => i.id !== id)
    setActivityList(data)
  }

  const [updateAct, setUpdateAct] = useState([])
  
  useEffect(()=>{
    let today = new Date()
    let updatedContinue = activityList.map(i =>{
      let update = {}      
      update['id'] = i.id
      update['activityTitle'] = i.activityTitle
      update['description'] = i.description
      update['needToBeReminded'] = i.needToBeReminded
      update['continue'] = i.continue
      update['every'] = i.every
      update['listId'] = i.listId
      update['remindedAt'] = i.remindedAt
      if( i.remindedAt.toLocaleDateString().toString().toLower === today.toLocaleDateString().toString().toLower && i.continue){
        // update['remindedAt'] = new Date(i.remindedAt.getTime()+(i.every*24*60*60*1000));
        update['renewAt'] = new Date(i.remindedAt.getTime()+(i.every*24*60*60*1000))
      }
      return update
    })
    console.log(updatedContinue)
    setUpdateAct(updatedContinue)
  }, [activityList])

  // useEffect(()=>{
  //   const list = JSON.parse(localStorage.getItem('list'))
  //   const activity = JSON.parse(localStorage.getItem('activity'))
  //   if(list && activity){
  //     setListToShow(list)
  //     setActivityList(activity)
  //   }
  // }, [])

  // useEffect(()=>{
  //   localStorage.setItem('list', JSON.stringify(listToShow))
  //   localStorage.setItem('activity', JSON.stringify(updateAct))
  // }, [listToShow, updateAct])


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
              <CardList item={item} deleteFunction={deleteList} data={activityList} defineValues={defineValues} deleteActivity={deleteActivity}/>
            </ImageListItem>
          ))}
          </ImageList>
          
      </div>

      <div className="content-right">
        <h2>Upcoming Events</h2>
        <CardEvent data={updateAct} />
      </div>

    </div>
  );
}

export default App;
