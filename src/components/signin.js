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
      
changePassword = (event) => {
    this.setState({Password: event.target.value});
}

signIn = (event) => {
    firebase.auth().signInWithEmailAndPassword(this.state.Email, this.state.Password).catch((error) => {
      alert(error);
      console.log(error);
    });
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        console.log("Hello");
        this.props.history.push('/allevents');
      }
    });
  }

  render() {
      return (
        <div>
            <div class="LoginContainer">
                <br />
                <div>
                  <h1 className= "LoginHeader">Login</h1>
                </div>
                <br />
                <div>
                    <label>Dartmouth Email:   </label>
                    <input class="occupy" type="text" value={this.state.Email} onChange={this.changeEmail} /> 
                    {/* If i do not have the value set to this thing, even i type anyhing in the box, it will not show up */}
                </div>
                <br />
                <div>
                    <label>Password:   </label>
                    <input class="occupy" type="password" value={this.state.Password} onChange={this.changePassword}/>
                </div>
                <br />
                    <button onClick={this.signIn} class="submitButton">Login</button>
                <br />
              </div>
        </div>
      )
  }
}

export default SignIn;