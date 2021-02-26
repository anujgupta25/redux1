import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/Store.js';
import Login from './Login.js';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


ReactDOM.render(
 
  <Provider store={store}>
   <Router>
    <Switch>
      <Route path ='/user' component={App} />
      <Route path ='/' component={Login} />
    </Switch>
   </Router>
  </Provider>,
  document.getElementById('root')
);




