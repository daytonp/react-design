import React from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import ReactDOM from 'react-dom';
import "./CustomStyles/index.css";
import { BrowserRouter } from "react-router-dom"
import { Switch, Route } from "react-router-dom";

//All the pages go here
import Login from './Pages/login';
import Takeoffs from './Pages/takeoffs';
import NewTakeoff from './Pages/newTakeoff';


ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/takeoffs" component={Takeoffs} />
        <Route path="/newTakeoff" component={NewTakeoff} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>,
  document.querySelector('#root'));
