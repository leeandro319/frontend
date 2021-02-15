import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7e84fc",
      light: '#757ce8',
    },
    secondary: {
      main: green[500],
    },

    typography: {
      htmlFontSize: 10,
    },

  },
});

export default theme;