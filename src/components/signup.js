import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { flexibleCompare, preventDefault } from '@fullcalendar/core';
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
      
 changepassword = (event) => {
     this.setState({password: event.target.value});
 }
 
 changepasswordTwo = (event) => {
   this.setState({passwordTwo: event.target.value});
 }
 
 signup = (event) => {
   event.preventDefault();
   // This also makes the email show up on the database instead of only authentication
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
   } 
   else if (!this.state.email.endsWith('@dartmouth.edu')) {
     alert('Please enter a dartmouth.edu email');
   } 
   else {
     alert('Make sure passwords match');
   }
 }
 
 render() {
     return (
         <div class="LoginContainer">
               <br />
               <div>
                 <h1 className = "LoginHeader">Create New Account</h1>
               </div>
               <br />
               <div>
                   <label>Dartmouth Email:   </label>
                   <input class="occupy" type="text" value={this.state.email} onChange={this.changeemail} />
                   {/* If i do not have the value set to this thing, even i type anyhing in the box, it will not show up */}
               </div>
               <br />
               <div>
                   <label>Password:   </label>
                   <input class="occupy" type="password" value={this.state.password} onChange={this.changepassword}/>
               </div>
               <br />
               <div>
                   <label>Confirm Password:   </label>
                   <input class="occupy" type="password" value={this.state.passwordTwo} onChange={this.changepasswordTwo}/>
               </div>
               <br />
                   <button class="submitButton" onClick={this.signup}>Create Account</button>
               <br />
           </div>
     )
 }
}

export default SignUp;
