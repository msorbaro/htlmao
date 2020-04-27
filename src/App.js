import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Calendar from './components/calendar';
import NewPost from './components/newPost';
import Filter from './components/filter';
import NavBar from './components/navbar';
import Login from './components/login';


class App extends Component {
  constructor(props){
    super(props);
    this.state={authenticated: false}
  }
  render() {

    var loginOrAllEvents = null;

      if (!this.state.authenticated) {
        loginOrAllEvents=(
          <Login/>
        )
      }
      else {
        loginOrAllEvents=<p>Bruhhh</p>
      }

    

    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path="/allevents" component={Calendar} />
            <Route exact path="/myevents" component={Calendar} />
            <Route exact path="/postevent" component={NewPost} />
            <Route exact path="/login" component={Login} />
          </div>
          <body>
             {loginOrAllEvents}
          </body>
        </div>
      </Router>
    );
  }
}

export default App;


