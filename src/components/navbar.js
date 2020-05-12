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
      
    bruhhhAlert=()=>{
        alert("bruhhh")
    }

    signout = () => {
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
            <nav className="navbarlinks">
                <Link to="/">
                    <a className="logout" onClick={this.signout}>Log Out</a>
                </Link>
                <Link to="/postevent">
                    <a>Post an Event</a>
                </Link>
                <Link to="/allevents" onClick={this.props.allevents}>
                    <a>All Events</a>
                </Link>
            </nav>
            );
        }

        return (
            <div className="navbar">

                <div className="leftSide">
                    <img src={require('../images/wine.png')} alt="keg pic" className="kegpic" onClick={this.bruhhhAlert}/>
                    <header className="TheKeg">The Keg</header>
                    <h1 className="Whatsontap">What's on tap for today?</h1>
                </div>

                <div className="rightSide">
                  {navbar}
                </div>
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
