import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { FormControl } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "95%"
    },
  },
  card: {
      width: '15vw',
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
      width: "1500px"
  }
}));

export default function FormTitle({ handleClick, handleInputText ,handleCreateList }) {
  const classes = useStyles();

  return (
        
        <Paper className={clsx(classes.card, classes.root)}>
                <TextField
                    id="standard-read-only-input"
                    label="Title"
                    InputProps={{
                        readOnly: false,
                    }}
                    className={classes.textField}
                    onChange={handleInputText}
                />
                <FormControl className={classes.btnGroup}>
                    <IconButton color="secondary" aria-label="create Title" onClick={handleCreateList} className={classes.btn}>
                        <DoneIcon className={classes.buttonDone}/>
                    </IconButton>
                    <IconButton color="secondary" aria-label="cancel" onClick={handleClick} className={classes.btn}>
                        <CloseIcon className={classes.buttonCancel}/>
                    </IconButton>
                </FormControl>
            
        </Paper>
      
  );
}