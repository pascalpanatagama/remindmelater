import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#297F87',
      main: '#D5EEBB',
      dark: '#D5EEBB',
      contrastText: '#297F87',
    },
    secondary: {
      light: '#ff7961',
      main: '#000000',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme