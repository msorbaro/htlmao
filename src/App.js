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
import firebase from 'firebase';
import * as db from './datastore.js';
//can import firebase and then don't need to do export files


class App extends Component {
  constructor(props){
    super(props);
    this.state={authenticated: false}
    this.user = db.signIn();
  }
/*
  //get rid of state variables
  unauthenticate = () => {
    this.setState({authenticated: false})
    // set based to firebase auth state thing
    console.log("you called App.js unauthenticate")
    console.log("value of app.js authenticated: "+this.state.authenticated)
  }

  authenticate = () => {
    this.setState({authenticated: true})
    console.log("you called App.js authenticate")
    console.log("value of app.js authenticated: "+this.state.authenticated)
  } */

  render() {

    // var loginOrElse = null;
    //     if(firebase.auth().onAuthStateChanged((this.user))) {
    //   //if (!this.state.authenticated) { // get user from on auth state change and do if statement based on that
    //     console.log("if triggered")
    //     loginOrElse=(
    //       <div>
    //         <div className="bluebox">
    //           <p className="pageTitle">Welcome Back</p>
    //         </div>
        
    //       <div class = "LoginWrapper">
    //         <div class = "SignIn"><SignIn changeAuthenticateTrue={this.authenticate}/></div>
    //         <div class = "SignUp"><SignUp changeAuthenticateTrue={this.authenticate}/></div>
    //       </div>
    //       </div>
    //     )
    //   }
    //   else {
    //     console.log("else triggered")
    //     // loginOrElse=<p>You are logged in!</p>
    //   }

    

    return (
        
      <Router>
        
        <div className="App">
        {/* <NavBar/> */}
          {/* {loginOrElse} */}
          <div>
            <Route exact path="/" component={Login} />
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


