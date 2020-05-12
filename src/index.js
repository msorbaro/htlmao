import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Calendar from './components/calendar';
import NewPost from './components/newPost';
import Filter from './components/filter';
import NavBar from './components/navbar';
import Login from './components/login';
import SignIn from './components/signin';
import SignUp from './components/signup';
import firebase from 'firebase';
import * as db from './datastore.js';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/allevents" component={Calendar} />
            <Route exact path="/myevents" component={Calendar} />
            <Route exact path="/postevent" component={NewPost} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
