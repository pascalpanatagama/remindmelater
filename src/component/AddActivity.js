import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { FormControl, Typography } from '@material-ui/core';
import clsx from 'clsx';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from './DatePicker';
// import { InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "95%"
    },
  },
  card: {
      width: '100%',
  },
  btnGroup: {
    display: "flex",
    flexDirection: "row-reverse"
  },
  buttonDone: {
    padding: "10%",
    backgroundColor: "#D5EEBB",
    borderRadius: "40%"
  },  
  buttonCancel: {
    padding: "10%",
    backgroundColor: "#EF0C0C",
    borderRadius: "40%"
  },
  btn: {
      marginLeft: "-10px"
  },
  cont: {
      position: "relative"
  },
  textField: {
      // width: "150px"
  },
  checkbox: {
    marginLeft: theme.spacing(1)
  },
  text: {
    marginLeft: theme.spacing(4)
  },
  continuous: {
    marginLeft: theme.spacing(4)
  },
  textContinuos: {
    marginLeft: theme.spacing(8)
  }
}));

export default function AddActivity({ handleClick, handleAddActivity, listId, defineValues }) {
  const classes = useStyles();
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [needToBeReminded, setNeedToBeReminded] = React.useState(false)
  const [isContinuous, setIsContinuous] = React.useState(false)
  // const [remindedAt, setRemindedAt] = React.useState(undefined)
  const [counter, setCounter] = React.useState(1)

  const [startDate, setStartDate] = React.useState(new Date());
  // activityTitle, description, needToBeReminded, isContinuous, counter, startDate, listId
  const addActivity = () => {
    defineValues(title,description,needToBeReminded,isContinuous, counter, startDate, listId)
    handleClick()
  }

  // useEffect(()=>{
  //   handleAddActivity(activityData)
  // })

  return (
        
        <Paper className={clsx(classes.card, classes.root)}>
                <TextField
                    id="standard-read-only-input"
                    label="Activity Title"
                    InputProps={{
                        readOnly: false,
                    }}
                    className={classes.textField}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <TextField
                    id="standard-multiline-flexible"
                    label="Description"
                    multiline
                    rows={4}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <FormControl component="fieldset" className={classes.checkbox}>
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            value={needToBeReminded}
                            control={<Checkbox color="secondary" checked={needToBeReminded} onChange={()=>setNeedToBeReminded(!needToBeReminded)}/>}
                            label="Need to be reminded?"
                            labelPlacement="end"
                                                        
                        />
                    </FormGroup>
                        <div style={{display: needToBeReminded?'flex':"none", margin: 0}}>
                            <Typography className={classes.text}>When?</Typography>
                            <DatePicker 
                              selected={startDate} 
                              onChange={(date) => setStartDate(date)} 
                              minDate={new Date()}
                              showDisabledMonthNavigation
                            />
                        </div>

                    <FormGroup aria-label="position" row className={classes.continuous}>
                        <FormControlLabel
                            value={isContinuous}
                            control={<Checkbox color="secondary" checked={isContinuous} onChange={()=>setIsContinuous(!isContinuous)}/>}
                            label="Continuous?"
                            labelPlacement="end"
                            disabled={needToBeReminded? false : true}
                        />
                    </FormGroup>
                        <div style={{display: isContinuous?'flex':"none", margin: 0}}>
                            <Typography className={classes.textContinuos}>Every</Typography>
                            <TextField
                                InputProps={{
                                    readOnly: false,
                                }}
                                style={{ width: '20px'}}
                                value={counter}
                                onChange={(e)=>setCounter(e.target.value)}
                            />
                            <Typography>Day</Typography>
                        </div>

                </FormControl>

                <FormControl className={classes.btnGroup}>
                    <IconButton color="secondary" aria-label="create Title" className={classes.btn} onClick={()=>addActivity()}>
                        <DoneIcon className={classes.buttonDone}/>
                    </IconButton>
                    <IconButton color="secondary" aria-label="cancel" onClick={handleClick} className={classes.btn}>
                        <CloseIcon className={classes.buttonCancel}/>
                    </IconButton>
                </FormControl>
            
        </Paper>
      
  );
}