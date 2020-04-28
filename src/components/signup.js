import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { flexibleCompare } from '@fullcalendar/core';

class SignUp extends Component {
  constructor(props) {
      super(props);

      this.state = {
        Email: "",
        Password: "",
        PasswordTwo: "",
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

  changePasswordTwo = (event) => {
    this.setState({PasswordTwo: event.target.value});
         // console.log(this.state.PasswordTwo);
  }


  render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div class="OuterContainer">
                <br />
                <div>
                  <h1>Create New Account</h1>
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
                <div>
                    <label>Re-Enter Password:   </label>
                    <input class="occupy" type="text" value={this.state.passwordTwo} onChange={this.changePasswordTwo}/>
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

//   onEmailChange = (event) => {
//     this.setState({ email: event.target.value });
//   }

//   onPasswordChange= (event) => {
//     this.setState({ password: event.target.value });
//   }

//   onPasswordTwoChange= (event) => {
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
//       firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
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
//             <Input className="response" placeholder="Dartmouth Email" onChange={this.onEmailChange} value={this.state.email} />
//             <div className="prompt"> Enter your first name: </div>
//             <Input className="response" placeholder="First name" onChange={this.onFirstUsernameChange} value={this.state.firstusername} />
//             <div className="prompt"> Enter your last name: </div>
//             <Input className="response" placeholder="Last name" onChange={this.onLastUsernameChange} value={this.state.lastusername} />
//             <div className="prompt"> Enter a password: </div>
//             <Input type="password" className="response" id="passwordInput" placeholder="Password" onChange={this.onPasswordChange} value={this.state.password} />
//             <div className="prompt"> Confirm password: </div>
//             <Input type="password" className="response" id="passwordInput" placeholder="Password" onChange={this.onPasswordTwoChange} value={this.state.passwordTwo} />

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