import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './signup';
import { signUp, signIn } from '../datastore';
import firebase from 'firebase';
import Calendar from './calendar';
import NavBar from './navbar';


class Login extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            authenticated: false,
            userEmail: ""
        }
    }

     componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({authenticated: true});
                this.setState({userEmail: user.email});
            }
            else{
                this.setState({authenticated: false});
                this.setState({userEmail: ""});
            }
        });
        // db.fetchNewPost(this.fetchedNewPosts);
    }

    render() {
        if(!this.state.authenticated){
            return (
                <div> 
                <NavBar/>
 
                <div className = "LoginWrapper">
                    <SignIn />
                    <SignUp />
                </div>
                </div>    
            );
        }
        else{
            this.props.history.push('/allevents');
            return(
                null
            // <div>
            //     Hello {this.state.userEmail.split('.')[0]}, you are logged in 
            // </div>
            // Since signIn returns us to this place, do we route to allevents from here?
            )
        }
    };
}

export default Login;

