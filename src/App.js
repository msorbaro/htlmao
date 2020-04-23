import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Calendar from './components/calendar';
import NewPost from './components/newPost';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Filter from './components/filter';

// const Home = () => (
//   <div>
//     Home
//   </div>
// )

// const About = () => (
//   <div>
//     About
//   </div>
// )

// const Code = () => (
//   <div>
//     Code
//   </div>
// )

// const Contact = () => (
//   <div>
//     Contact
//   </div>
// )

const MainMenu = () => {
return (
<div>
  {/* <Link to="/">
    <button>home</button>
  </Link> */}
  <Link to="/allevents">
    <button>All Events</button>
  </Link>
  <Link to="/myevents">
    <button>My Events</button>
  </Link>
  <Link to="/postevent">
    <button>Post Event</button>
  </Link>
</div>
);
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
            <MainMenu />
          </header>
          <div>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/allevents" component={Calendar} />
            <Route exact path="/myevents" component={Calendar} />
            <Route exact path="/postevent" component={NewPost} />
          </div>
          <body>
            <SignIn/>
            <SignUp/>
            <Filter/>
          </body>
        </div>
      </Router>
    );
  }
}

export default App;



// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <header className="App-header">
//         <p>
//         Welcome Team <code> htlmao </code>
//         </p>
//       </header>
//     </div>
//     </Router>
//   );
// }

// export default App;