import React, { Component } from 'react';
import './navbarStyles.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase from 'firebase';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: false
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ authenticated: true });
          }
        });
      }    

    signout = () => {
        // this.props.changeAuthenticateFalse();
        // console.log("you clicked log out, navbar.signout called")
        firebase.auth().signOut().then(() => {
            console.log('logged out');
          }).catch((error) => {
            console.log('wait, could not sign out');
          });
          this.setState({ authenticated: false });
    }

 

    renderNav() {
        
        var navbar = null;
        if (this.state.authenticated) {
            navbar=(
            <div className="navbarlinks">
                <Link to="/">
                    <a className="logout" onClick={this.signout}>Log Out</a>
                </Link>
                <Link to="/postevent">
                    <a>Post an Event</a>
                </Link>
                <Link to="/myevents" onClick={this.props.myevents}>
                    <a>My Events</a>
                </Link>
                <Link to="/allevents" onClick={this.props.allevents}>
                    <a>All Events</a>
                </Link>
            </div>
            );
        }
        else {
            navbar=(
                <div className="loginNavbarlinks">
                    <Link to="">
                        <a className="logout">Log Out</a>
                    </Link>
                    <Link to="">
                        <a>Post an Event</a>
                    </Link>
                    <Link to="">
                        <a>My Events</a>
                    </Link>
                    <Link to="">
                        <a>All Events</a>
                    </Link>
                </div>
                );
        }

        return (
            <div className="navbar">
                {navbar}
                {/* <div className="navbarlinks">
                    <Link to="">
                        <a className="logout" onClick={this.signout}>Log Out</a>
                    </Link>
                    <Link to="/postevent">
                        <a>Post an Event</a>
                    </Link>
                    <Link to="/myevents">
                        <a>My Events</a>
                    </Link>
                    <Link to="/allevents">
                        <a>All Events</a>
                    </Link>
                </div> */}
                
                <header className="TheKeg">The Keg</header>
                <h1 className="Whatsontap">What's on tap for today?</h1>
                <img src={require('../images/wine.png')} alt="keg pic" className="kegpic"/>

            </div>  
        );
    }

    render() {
        return(
            <nav>
                {this.renderNav()}
            </nav>
        );
    }
}

export default NavBar;



