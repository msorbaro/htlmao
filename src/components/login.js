import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './signup';


class Login extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            //stuff here
        }
    }

    render() {
        return (
            <div>
                <div> I'm the login component. If you're seeing this you are NOT logged in. </div>
                <Link to="/allevents"> 
                    <button>Press me to login</button>
                </Link>   
                <SignIn/>
                <SignUp/>
            </div>    
        );
    };
}

export default Login;
