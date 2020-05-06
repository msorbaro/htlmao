import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './login.css';
import { DayBgRow } from '@fullcalendar/daygrid';
import * as db from '../datastore.js';
import firebase from 'firebase';

class SignIn extends Component {
  constructor(props) {
      super(props);

      this.state = {
          Email: "",
          Password: "",
      }
  }

changeEmail = (event) => {
    this.setState({Email: event.target.value});
}
      // console.log(this.state.email);
      
changePassword = (event) => {
    this.setState({Password: event.target.value});
         // console.log(this.state.password);
}

// signIn = () => {
//     // this.props.changeAuthenticateTrue();
//     db.signIn(this.state.Email, this.state.Password);
// }

signIn = (event) => {
    firebase.auth().signInWithEmailAndPassword(this.state.Email, this.state.Password).catch((error) => {
      alert(error);
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.history.push('/allevents');
      }
    });
  }

  render() {
      return (
        <form onSubmit={this.signIn}>
            <div class="LoginContainer">
                <br />
                <div>
                  <h1>Sign In</h1>
                </div>
                    <br />
                    <div>
                        <label>Email:   </label>
                        <input class="occupy" type="text" value={this.state.Email} onChange={this.changeEmail} /> 
                        {/* If i do not have the value set to this thing, even i type anyhing in the box, it will not show up */}
                    </div>
                    <br />
                    <div>
                        <label>Password:   </label>
                        <input class="occupy" type="text" value={this.state.Password} onChange={this.changePassword}/>
                    </div>
                    <br />
                    <Link to="/allevents">
                        <button class="submitButton" type="submit">Login</button>
                    </Link>
                    <br />
                </div>
            </form>
      )
  }
}

export default SignIn;



// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// class SignIn extends Component {
//   constructor(props) {
//       super(props);

//       this.state = {
//           Email: "",
//           Password: "",
//       }
//   }

// changeEmail = (event) => {
//     this.setState({Email: event.target.value});
// }
//       // console.log(this.state.email);
      
// changePassword = (event) => {
//     this.setState({Password: event.target.value});
//          // console.log(this.state.password);
// }

//   render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//             <div class="OuterContainer">
//                 <br />
//                 <div>
//                   <h1>Sign In</h1>
//                 </div>
//                     <br />
//                     <div>
//                         <label>Email:   </label>
//                         <input class="occupy" type="text" value={this.state.Email} onChange={this.changeEmail} /> 
//                         {/* If i do not have the value set to this thing, even i type anyhing in the box, it will not show up */}
//                     </div>
//                     <br />
//                     <div>
//                         <label>Password:   </label>
//                         <input class="occupy" type="text" value={this.state.Password} onChange={this.changePassword}/>
//                     </div>
//                     <br />
//                     <Link to="/allevents">
//                         <button class="submitButton" type="submit">Login</button>
//                     </Link>
//                     <br />
//                 </div>
//             </form>
//       )
//   }
// }

// export default SignIn;

// import { withRouter } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { Input } from 'reactstrap';
// import firebase from 'firebase';

// class SignIn extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       password: '',
//     };
//   }

//   onEmailChange = (event) => {
//     this.setState({ email: event.target.value });
//   }

//   onPasswordChange= (event) => {
//     this.setState({ password: event.target.value });
//   }

//   handleSigninButtonClick = (event) => {
//     firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
//       alert(error);
//     });
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         this.props.history.push('/');
//       }
//     });
//   }

//   handleCancelButtonClick = (event) => {
//     this.props.history.push('/');
//   }

//   render() {
//     return (
//       <div className="displaySignInInfoContainer">
//         <div className="displaySignInInfo">
//           <div className="leftJustify" style={{ width: '100%' }}>
//             <div className="prompt"> Email: </div>
//             <Input className="response" id="emailInputBar" placeholder="Dartmouth Email" onChange={this.onEmailChange} value={this.state.email} />
//             <div className="prompt"> Password: </div>
//             <Input type="password" className="response" id="passwordInput" placeholder="Password" onChange={this.onPasswordChange} value={this.state.password} />
//           </div>
//           <div>
//             <Button className="signupButtons" id="createButton" onClick={this.handleSigninButtonClick}>Log In</Button>
//             <Button className="signupButtons" id="cancelButton" onClick={this.handleCancelButtonClick}>Cancel</Button>
//           </div>
//         </div>
//         <p>I'm the sign in component</p>
//       </div>
//     );
//   }
// }

// // export default NewPost;
// export default withRouter((SignIn));