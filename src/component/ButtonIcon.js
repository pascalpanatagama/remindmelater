import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    buttonAdd: {
      padding: "10%",
      backgroundColor: "#D5EEBB",
      borderRadius: "40%"
    }
}));
  

const ButtonIcon = ({ handleClick }) => {
    const classes = useStyles();

    return (
        <IconButton color="secondary" aria-label="create list" onClick={handleClick}>
            <AddIcon className={classes.buttonAdd}/>
        </IconButton>
    )
}

export default ButtonIcon