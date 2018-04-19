import React from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import ReactDOM from 'react-dom';
import "./CustomStyles/index.css";

//All the pages go here
import Login from './Pages/login';
import Takeoffs from './Pages/takeoffs';
import NewTakeoff from './Pages/newTakeoff';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    {/* <Login /> */}
    {/* <Takeoffs /> */}
    <NewTakeoff />
  </React.Fragment>,
  document.querySelector('#root'));
