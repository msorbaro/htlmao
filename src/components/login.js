import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './signup';
import { signUp, signIn } from '../datastore';
import firebase from 'firebase';
import Calendar from './calendar';


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
                    <SignIn />
                    <SignUp />
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

