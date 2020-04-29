import React, { Component } from 'react';
import './navbarStyles.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    signout = () => {
        this.props.changeAuthenticateFalse();
        console.log("you clicked log out, navbar.signout called")
    }

    renderNav() {
        return (
            <div className="navbar">
                <div className="navbarlinks">
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
                </div>
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




// import React, { Component } from 'react';
// import './navbarStyles.css'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// class NavBar extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             //no state
//         }
//     }

//     renderNav() {
//         return (
//             <div className="navbar">
//                 <div className="navbarlinks">
//                     <Link to="/login">
//                         <a className="logout">Log Out</a>
//                     </Link>
//                     <Link to="/postevent">
//                         <a>Post an Event</a>
//                     </Link>
//                     <Link to="/myevents">
//                         <a>My Events</a>
//                     </Link>
//                     <Link to="/allevents">
//                         <a>All Events</a>
//                     </Link>
//                 </div>

//                 <header className="TheKeg">The Keg</header>
//                 <h1 className="Whatsontap">What's on tap for today?</h1>

//                 <img src={require('../images/wine.png')} alt="keg pic" className="kegpic"/>

//             </div>  
//         );
//     }

//     render() {
//         return(
//             <nav>
//                 {this.renderNav()}
//             </nav>
//         );
//     }
// }

// export default NavBar;