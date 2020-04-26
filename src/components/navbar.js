import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: true
        }
    }

    signout = () => {
        return (
            this.setState({authenticated: false})
            //let  other components know change of state

        );
    };

    renderNav() {
        if(this.state.authenticated) {
            return (
                <div>
                    I'm the navbar component
                    <li>
                        <Link to="/login">
                            <button id="logout" onClick={this.signout}>Log Out</button>
                        </Link>
                    </li>
                    <li id="allEvents">
                        <Link to="/allevents">
                            <button id="allEventsButton">All Events</button>
                        </Link>
                    </li>
                    <li id="myEvents">
                        <Link to="/myevents">
                            <button id="myEventsButton">My Events</button>
                        </Link>
                    </li>
                    <li id="postEvent">
                        <Link to="/postevent">
                            <button id="postEventButton">Post an Event</button>
                        </Link>
                    </li>
                </div>  
            );
        }
        else {
            return (
                console.log("currently signed out")
            );
        }
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