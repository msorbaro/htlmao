import React, {Component} from 'react';
import { flexibleCompare } from '@fullcalendar/core';
import '../newPostStyles.css';
import NavBar from './navbar';
import Event from './event';
import { Map } from 'immutable';
import { DayBgRow } from '@fullcalendar/daygrid';
import * as db from '../datastore.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



class NewPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: null,
            eventID: 0, 
            StudentGroup:"",
            EventTitle:"",
            Time:"",
            Place:"",
            AdditionalDescription:"",
            Category:"Athletics",
            Food:"No",
        };
    }
    
    componentDidMount(){
        db.fetchNewPost(this.fetchedNewPosts);
    }

    fetchedNewPosts= (allEvents) =>{
        this.setState({events: allEvents});
    }

    changeStudentGroup = (event) => {
        this.setState({StudentGroup: event.target.value});
        // console.log(this.state.StudentGroup);
    }
    changeEventTitle = (event) => {
        this.setState({EventTitle: event.target.value});
        // console.log(this.state.EventTitle);
    }
    changeTime = (event) => {
        this.setState({Time: event.target.value});
        // console.log(this.state.Time);
    }
    changePlace = (event) => {
        this.setState({Place: event.target.value});
        // console.log(this.state.Place);
    }
    changeAdditionalDescription = (event) => {
        this.setState({AdditionalDescription: event.target.value});
        // console.log(this.state.AdditionalDescription);
    }
    changeCategory = (event) => {
        this.setState({Category: event.target.value});
        // console.log(this.state.Category);
    }
    changeFood = (event) => {
        this.setState({Food: event.target.value});
        // console.log(this.state.Food);
    }

    delete = (eventID) => {
        // this.setState({dogs: this.state.dogs.delete(id)})
        db.removeNewPost(eventID);
        db.fetchNewPost(this.fetchedNewPosts);
    }

    saveEventInfo = () => {
        db.addNewPost(this.state.StudentGroup, this.state.EventTitle, this.state.Time, this.state.Place, this.state.AdditionalDescription, this.state.Category, this.state.Food);
        this.setState({
            StudentGroup:"",
            EventTitle:"",
            Time:"",
            Place:"",
            AdditionalDescription:"",
            Category:"Athletics",
            Food:"No"
        });
        db.fetchNewPost(this.fetchedNewPosts);
    }

    render() {
        let allEvents = null; // maybe try this with let
        if(this.state.events != null) {
            // alert("events is not null");
          allEvents = Object.keys(this.state.events).map((id) => {
            const info = this.state.events[id];
            return <Event 
              save={this.save} 
              delete={this.delete} 
              studentGroup={info.StudentGroup} 
              eventTitle={info.EventTitle} 
              time={info.Time} 
              place={info.Place} 
              additionalDescription={info.AdditionalDescription}
              category={info.Category}
              food={info.Food}
              id={id} />
          })
        }

        return (
            <div>
                <form onSubmit={this.saveEventInfo}>
                    <div class="OuterContainer">
                        <br />
                        <div>
                            <label>Student Group:   </label>
                            <input class="occupy" type="text" value={this.state.StudentGroup} onChange={this.changeStudentGroup} /> 
                            {/* If i do not have the value set to this thing, even i type anyhing in the box, it will not show up */}
                        </div>
                        <br />
                        <div>
                            <label>Event Title:   </label>
                            <input class="occupy" type="text" value={this.state.EventTitle} onChange={this.changeEventTitle}/>
                        </div>
                        <br />
                        <div>
                            <label>Time:   </label>
                            <input class="occupy" type="text" value={this.state.Time} onChange={this.changeTime}/>
                        </div>
                        <br />
                        <div>
                            <label>Place:   </label>
                            <input class="occupy" type="text" value={this.state.Place} onChange={this.changePlace}/>
                        </div>
                        <br />
                        <div>
                            <label>Category:   </label>
                            <select value={this.state.Category} onChange={this.changeCategory}>
                                <option value="Atheltics">Athletics</option>
                                <option value="Programming">Programming</option>
                                <option value="Professional">Professional</option>
                                <option value="Performance">Performance</option>
                                <option value="Clubs">Clubs</option>
                                <option value="Religious">Religious</option>
                                <option value="Art">Art</option>
                                <option value="Guest Speaker">Guest Speaker</option>
                                <option value="Greek Life">Greek Life</option>
                                <option value="Health">Health</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <br />
                        <div>
                            <label>Food Provided?   </label>
                            <select value={this.state.Food} onChange={this.changeFood}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <br />
                        <div>
                            <label>Additional Description:   </label>
                            <textarea value={this.state.AdditionalDescription} onChange={this.changeAdditionalDescription} />
                        </div>
                        <br />
                        <Link to="/allevents">
                            <button class="submitButton" type="submit">Submit</button>
                        </Link>
                        <br />
                    </div>
                </form>
                {allEvents}
            </div>    
        )
    }
}

export default NewPost;

// Add the routing to the calender on submitting the event