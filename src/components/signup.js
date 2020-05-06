import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { flexibleCompare } from '@fullcalendar/core';
import './login.css';
import * as db from '../datastore.js';
import firebase from 'firebase';

class SignUp extends Component {
  constructor(props) {
      super(props);

      this.state = {
        email: "",
        password: "",
        passwordTwo: "",
      }
  }

  changeemail = (event) => {
      this.setState({email: event.target.value});
  }
        // console.log(this.state.email);
        
  changepassword = (event) => {
      this.setState({password: event.target.value});
           // console.log(this.state.password);
  }

  changepasswordTwo = (event) => {
    this.setState({passwordTwo: event.target.value});
         // console.log(this.state.passwordTwo);
  }

  // signup = () => {
  //   if (this.state.password == this.state.passwordTwo){
  //     db.signUp(this.state.email, this.state.password)}
  //   // this.props.changeAuthenticateTrue();
  // }

  signup = (event) => {
    if ((this.state.email.endsWith('@dartmouth.edu') || this.state.email.endsWith('@Dartmouth.edu')) && this.state.password === this.state.passwordTwo) {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
        alert(error);
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          firebase.database().ref(`users/${user.uid}`).set({
            email: this.state.email,
          });
          console.log('pushing history');
          this.props.history.push('/allevents');
        }
      });
    } else if (!this.state.email.endsWith('@dartmouth.edu')) {
      alert('Please enter a dartmouth.edu email');
    } else {
      alert('Make sure passwords match');
    }
  }

  render() {
      return (
        <form onSubmit={this.signup}>
          <div class="LoginContainer">
                <br />
                <div>
                  <h1>Create New Account</h1>
                </div>
                <br />
                <div>
                    <label>email:   </label>
                    <input class="occupy" type="text" value={this.state.email} onChange={this.changeemail} /> 
                    {/* If i do not have the value set to this thing, even i type anyhing in the box, it will not show up */}
                </div>
                <br />
                <div>
                    <label>password:   </label>
                    <input class="occupy" type="text" value={this.state.password} onChange={this.changepassword}/>
                </div>
                <br />
                <div>
                    <label>Re-Enter password:   </label>
                    <input class="occupy" type="text" value={this.state.passwordTwo} onChange={this.changepasswordTwo}/>
                </div>
                <br />
                <Link to="/allevents">
                    <button class="submitButton" type="submit">Create Account</button>
                </Link>
                <br />
            </div>
        </form>
      )
  }
}

export default SignUp;




// import { withRouter } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { Input } from 'reactstrap';
// import firebase from 'firebase';

// class SignUp extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       firstusername: '',
//       lastusername: '',
//       password: '',
//       passwordTwo: '',
//     };
//   }

//   onemailChange = (event) => {
//     this.setState({ email: event.target.value });
//   }

//   onpasswordChange= (event) => {
//     this.setState({ password: event.target.value });
//   }

//   onpasswordTwoChange= (event) => {
//     this.setState({ passwordTwo: event.target.value });
//   }

//   onFirstUsernameChange= (event) => {
//     this.setState({ firstusername: event.target.value });
//   }

//   onLastUsernameChange= (event) => {
//     this.setState({ lastusername: event.target.value });
//   }


//   handleSignupButtonClick = (event) => {
//     if ((this.state.email.endsWith('@dartmouth.edu') || this.state.email.endsWith('@Dartmouth.edu')) && this.state.password === this.state.passwordTwo) {
//       firebase.auth().createUserWithemailAndpassword(this.state.email, this.state.password).catch((error) => {
//         alert(error);
//       });

//       firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//           firebase.database().ref(`users/${user.uid}`).set({
//             email: this.state.email,
//             username: `${this.state.firstusername} ${this.state.lastusername}`,
//           });
//           user.updateProfile({
//             displayName: `${this.state.firstusername} ${this.state.lastusername}`,
//           });
//           console.log('pushing history');
//           this.props.history.push('/');
//         }
//       });
//     } else if (!this.state.email.endsWith('@dartmouth.edu')) {
//       alert('Please enter a dartmouth.edu email');
//     } else {
//       alert('Make sure passwords match');
//     }
//   }

//   handleCancelButtonClick = (event) => {
//     this.props.history.push('/');
//   }

//   render() {
//     return (
//       <div className="displaySignInInfoContainer">
//         <div className="displaySignInInfo">
//           <div className="leftJustify">
//             <div className="prompt"> Enter your Dartmouth email: </div>
//             <Input className="response" placeholder="Dartmouth email" onChange={this.onemailChange} value={this.state.email} />
//             <div className="prompt"> Enter your first name: </div>
//             <Input className="response" placeholder="First name" onChange={this.onFirstUsernameChange} value={this.state.firstusername} />
//             <div className="prompt"> Enter your last name: </div>
//             <Input className="response" placeholder="Last name" onChange={this.onLastUsernameChange} value={this.state.lastusername} />
//             <div className="prompt"> Enter a password: </div>
//             <Input type="password" className="response" id="passwordInput" placeholder="password" onChange={this.onpasswordChange} value={this.state.password} />
//             <div className="prompt"> Confirm password: </div>
//             <Input type="password" className="response" id="passwordInput" placeholder="password" onChange={this.onpasswordTwoChange} value={this.state.passwordTwo} />

//           </div>
//           <div>
//             <Button className="signupButtons" id="createButton" onClick={this.handleSignupButtonClick}>Sign Up</Button>
//             <Button className="signupButtons" id="cancelButton" onClick={this.handleCancelButtonClick}>Cancel</Button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// // export default NewPost;
// export default withRouter((SignUp));








// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { flexibleCompare } from '@fullcalendar/core';

// class SignUp extends Component {
//   constructor(props) {
//       super(props);

//       this.state = {
//         email: "",
//         password: "",
//         passwordTwo: "",
//       }
//   }

//   changeemail = (event) => {
//       this.setState({email: event.target.value});
//   }
//         // console.log(this.state.email);
        
//   changepassword = (event) => {
//       this.setState({password: event.target.value});
//            // console.log(this.state.password);
//   }

//   changepasswordTwo = (event) => {
//     this.setState({passwordTwo: event.target.value});
//          // console.log(this.state.passwordTwo);
//   }


//   render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <div class="OuterContainer">
//                 <br />
//                 <div>
//                   <h1>Create New Account</h1>
//                 </div>
//                 <br />
//                 <div>
//                     <label>email:   </label>
//                     <input class="occupy" type="text" value={this.state.email} onChange={this.changeemail} /> 
//                     {/* If i do not have the value set to this thing, even i type anyhing in the box, it will not show up */}
//                 </div>
//                 <br />
//                 <div>
//                     <label>password:   </label>
//                     <input class="occupy" type="text" value={this.state.password} onChange={this.changepassword}/>
//                 </div>
//                 <br />
//                 <div>
//                     <label>Re-Enter password:   </label>
//                     <input class="occupy" type="text" value={this.state.passwordTwo} onChange={this.changepasswordTwo}/>
//                 </div>
//                 <br />
//                 <Link to="/allevents">
//                     <button class="submitButton" type="submit">Create Account</button>
//                 </Link>
//                 <br />
//             </div>
//         </form>
//       )
//   }
// }

// export default SignUp;




// import { withRouter } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { Input } from 'reactstrap';
// import firebase from 'firebase';

// class SignUp extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       firstusername: '',
//       lastusername: '',
//       password: '',
//       passwordTwo: '',
//     };
//   }

//   onemailChange = (event) => {
//     this.setState({ email: event.target.value });
//   }

//   onpasswordChange= (event) => {
//     this.setState({ password: event.target.value });
//   }

//   onpasswordTwoChange= (event) => {
//     this.setState({ passwordTwo: event.target.value });
//   }

//   onFirstUsernameChange= (event) => {
//     this.setState({ firstusername: event.target.value });
//   }

//   onLastUsernameChange= (event) => {
//     this.setState({ lastusername: event.target.value });
//   }


//   handleSignupButtonClick = (event) => {
//     if ((this.state.email.endsWith('@dartmouth.edu') || this.state.email.endsWith('@Dartmouth.edu')) && this.state.password === this.state.passwordTwo) {
//       firebase.auth().createUserWithemailAndpassword(this.state.email, this.state.password).catch((error) => {
//         alert(error);
//       });

//       firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//           firebase.database().ref(`users/${user.uid}`).set({
//             email: this.state.email,
//             username: `${this.state.firstusername} ${this.state.lastusername}`,
//           });
//           user.updateProfile({
//             displayName: `${this.state.firstusername} ${this.state.lastusername}`,
//           });
//           console.log('pushing history');
//           this.props.history.push('/');
//         }
//       });
//     } else if (!this.state.email.endsWith('@dartmouth.edu')) {
//       alert('Please enter a dartmouth.edu email');
//     } else {
//       alert('Make sure passwords match');
//     }
//   }

//   handleCancelButtonClick = (event) => {
//     this.props.history.push('/');
//   }

//   render() {
//     return (
//       <div className="displaySignInInfoContainer">
//         <div className="displaySignInInfo">
//           <div className="leftJustify">
//             <div className="prompt"> Enter your Dartmouth email: </div>
//             <Input className="response" placeholder="Dartmouth email" onChange={this.onemailChange} value={this.state.email} />
//             <div className="prompt"> Enter your first name: </div>
//             <Input className="response" placeholder="First name" onChange={this.onFirstUsernameChange} value={this.state.firstusername} />
//             <div className="prompt"> Enter your last name: </div>
//             <Input className="response" placeholder="Last name" onChange={this.onLastUsernameChange} value={this.state.lastusername} />
//             <div className="prompt"> Enter a password: </div>
//             <Input type="password" className="response" id="passwordInput" placeholder="password" onChange={this.onpasswordChange} value={this.state.password} />
//             <div className="prompt"> Confirm password: </div>
//             <Input type="password" className="response" id="passwordInput" placeholder="password" onChange={this.onpasswordTwoChange} value={this.state.passwordTwo} />

//           </div>
//           <div>
//             <Button className="signupButtons" id="createButton" onClick={this.handleSignupButtonClick}>Sign Up</Button>
//             <Button className="signupButtons" id="cancelButton" onClick={this.handleCancelButtonClick}>Cancel</Button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// // export default NewPost;
// export default withRouter((SignUp));