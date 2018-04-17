import React from 'react';
import ReactDOM from 'react-dom';
import GridBerry from './pages/PaperTest';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import "./index.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[100],
      main: blue[300],
      dark: blue[500],
      contrastText: '#fff',
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <GridBerry />
    {/* <AnotherPage /> */}
  </MuiThemeProvider>, 
  document.querySelector('#root'));
