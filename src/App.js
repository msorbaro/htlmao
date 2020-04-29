import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Calendar from './components/calendar';
import NewPost from './components/newPost';
import Filter from './components/filter';
import NavBar from './components/navbar';
import Login from './components/login';
import SignIn from './components/signin';
import SignUp from './components/signup';


class App extends Component {
  constructor(props){
    super(props);
    this.state={authenticated: false}
  }

  unauthenticate = () => {
    this.setState({authenticated: false})
    console.log("you called App.js unauthenticate")
    console.log("value of app.js authenticated: "+this.state.authenticated)
  }

  authenticate = () => {
    this.setState({authenticated: true})
    console.log("you called App.js authenticate")
    console.log("value of app.js authenticated: "+this.state.authenticated)
  }

  render() {

    var loginOrElse = null;

      if (!this.state.authenticated) {
        console.log("if triggered")
        loginOrElse=(
          <div>
            <SignIn changeAuthenticateTrue={this.authenticate}/>
            <SignUp changeAuthenticateTrue={this.authenticate}/>
          </div>
        )
      }
      else {
        console.log("else triggered")
        loginOrElse=<p>You are logged in!</p>
      }

    

    return (
      <Router>
        <div className="App">
          <NavBar changeAuthenticateFalse={this.unauthenticate} authenticated={this.state.authenticated}/>
          {loginOrElse}
          <div>
            <Route exact path="/allevents" component={Calendar} />
            <Route exact path="/myevents" component={Calendar} />
            <Route exact path="/postevent" component={NewPost} />
            {/* <Route exact path="/login" component={Login} /> */}
          </div>
          <body>


          </body>
        </div>
      </Router>
    );
  }
}

export default App;








// import React, {Component} from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Calendar from './components/calendar';
// import NewPost from './components/newPost';
// import Filter from './components/filter';
// import NavBar from './components/navbar';
// import Login from './components/login';


// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={authenticated: false}
//   }
//   render() {

//     var loginOrAllEvents = null;

//       if (!this.state.authenticated) {
//         loginOrAllEvents=(
//           <Login/>
//         )
//       }
//       else {
//         loginOrAllEvents=<p>Bruhhh</p>
//       }

    

//     return (
//       <Router>
//         <div className="App">
//           <div>
//             <Route exact path="/allevents" component={Calendar} />
//             <Route exact path="/myevents" component={Calendar} />
//             <Route exact path="/postevent" component={NewPost} />
//             <Route exact path="/login" component={Login} />
//           </div>
//           <body>
//              {loginOrAllEvents}
//           </body>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;


