import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import "./CustomStyles/index.css";
//pages
import Login from './Pages/login';


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
    <Login />
    {/* <AnotherPage /> */}
  </MuiThemeProvider>, 
  document.querySelector('#root'));
