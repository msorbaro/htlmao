import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './signup';
import { signUp, signIn } from '../datastore';
import firebase from 'firebase';


class Login extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            authenticated: false
        }
    }

     componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({authenticated: true});
            }
            else{
                this.setState({authenticated: false});
            }
        });
        // db.fetchNewPost(this.fetchedNewPosts);
    }

    render() {
        if(!this.state.authenticated){
            return (
                // <div class = "LoginPage">
                //     {/* <div> I'm the login component. If you're seeing this you are NOT logged in. </div>
                //     <Link to="/allevents"> 
                //         <button>Press me to login</button>
                //     </Link>    */}
    
                //     <div className="loginnavbar">
                //         <img src={require('../images/wine.png')} alt="keg pic" className="loginkegpic"/>
                //         <header className="loginTheKeg">The Keg</header>
                //         <h1 className="loginWhatsontap">What's on tap for today?</h1>
    
                       
    
                //     </div>  
    
                //     <SignIn/>
                //     <SignUp/>
                // </div>    
                <div>
                    Sup Bruhhh
                    <SignIn />
                    <SignUp />
                </div>
            );
        }
        // Might need an else
    };
}

export default Login;
