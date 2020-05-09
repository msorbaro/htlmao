import React, {Component} from 'react';
import { flexibleCompare } from '@fullcalendar/core';
import '../newPostStyles.css';
import NavBar from './navbar';
import Event from './event';
import { Map } from 'immutable';
import { DayBgRow } from '@fullcalendar/daygrid';
import * as db from '../datastore.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
//import axios from 'axios';
//import DatePicker from 'react-datepicker/dist/react-datepicker';


class NewPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
            eventID: 0, 
            StudentGroup:"",
            EventTitle:"",
            // Time:"",
            Place:"",
            AdditionalDescription:"",
            Category:"Athletics",
            Food:"No",
            // Date: new Date(),
            StartDate: "",
            EndDate: "",
            // StringDate:""

        };
    }
    
    componentDidMount(){
        db.fetchNewPost(this.fetchedNewPosts);
    }

    fetchedNewPosts= (allEvents) =>{
        // if(allEvents!=null) {
        //     var array = []
        //     for (let i = 0; i < Object.keys(allEvents).length; i+=1) {
        //         const currKey = Object.keys(allEvents)[i];
        //         const currItem = allEvents[currKey];
        //         array.push(currItem);
        //     }
        //     this.setState({events: array});
        // }
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
    // changeTime = (event) => {
    //     this.setState({Time: event.target.value});
    //     // console.log(this.state.Time);
    // }
    changePlace = (event) => {
        this.setState({Place: event.target.value});
        // console.log(this.state.Place);
    }
    // changeDate = (event) => {
    //     this.setState({Date: event.target.value});
    //     // console.log(this.state.Place);
    // }
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

    changeStartDate = (event) => {
        this.setState({StartDate: event.target.value});
    }

    changeEndDate = (event) => {
        this.setState({EndDate: event.target.value});
    }

    // changeDate = date => {
    //     this.setState({
    //       Date: date
    //     });
    //     // this.setState({StringDate: this.state.Date.getFullYear+"-"+this.state.Date.getMonth+"-"+this.state.Date.getDate});
    //   };

    delete = (eventID) => {
        // this.setState({dogs: this.state.dogs.delete(id)})
        db.removeNewPost(eventID);
        db.fetchNewPost(this.fetchedNewPosts);
    }

    saveEventInfo = () => {
        var event = {
            title: this.state.EventTitle,
            start: this.state.StartDate + ":00",
            end: this.state.EndDate + ":00",
            className: 'event' + this.state.Category,
        }

        db.addNewPost(
            this.state.StudentGroup, 
            this.state.EventTitle, 
            // this.state.Time, 
            this.state.Place, 
            this.state.AdditionalDescription, 
            this.state.Category, 
            this.state.Food, 
            this.state.StartDate,
            this.state.EndDate,
            // this.state.Date
            event,
        );

        this.setState({
            StudentGroup:"",
            EventTitle:"",
            // Time:"",
            Place:"",
            AdditionalDescription:"",
            Category:"Athletics",
            Food:"No",
            StartDate: "",
            EndDate: "",
            // Date: new Date()
        });
        
        db.fetchNewPost(this.fetchedNewPosts);
        this.props.history.push('/allevents');
    }

    setEvents = (allEvents) => {
        if (allEvents!= null) {
            var array = []
            for (let i = 0; i < Object.keys(allEvents).length; i+=1) {
            const currKey = Object.keys(allEvents)[i];
            const currItem = allEvents[currKey];
            array.push(currItem);
            }
        this.setState({events: array});
        }
    }

    render() {
        let allEvents = null;
        if(this.state.events != null) {
          allEvents = Object.keys(this.state.events).map((id) => {
            const info = this.state.events[id];
            return <Event 
              save={this.save} 
              delete={this.delete} 
              studentGroup={info.StudentGroup} 
              eventTitle={info.EventTitle} 
              place={info.Place} 
              additionalDescription={info.AdditionalDescription}
              category={info.Category}
              food={info.Food}
              startDate={info.StartDate}
              endDate={info.EndDate}
              id={id} />
          })
        }

        console.log(this.state.EndDate);

        return (
            <div class="trial">
                <NavBar/>
                <div className="bluebox">
                    <p className="pageTitle">Post an Event</p>
                </div>
                <form onSubmit={this.saveEventInfo}>
                    <div class="OuterContainer">
                        <br />
                        <div>
                            <label>Student Group:   </label>
                            <input required class="occupy" type="text" value={this.state.StudentGroup} onChange={this.changeStudentGroup} /> 
                            {/* If i do not have the value set to this thing, even i type anyhing in the box, it will not show up */}
                        </div>
                        <br />
                        <div>
                            <label>Event Title:   </label>
                            <input required class="occupy" type="text" value={this.state.EventTitle} onChange={this.changeEventTitle}/>
                        </div>
                        <br />
                        <br />
                        <div>
                            <label>Place:   </label>
                            <input required class="occupy" type="text" value={this.state.Place} onChange={this.changePlace}/>
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
                            <label>Start:   </label>
                            <input className = "DateTime" type="datetime-local" value={this.state.StartDate} onChange={this.changeStartDate} />
                        </div>
                        {/* Not sure how to make these required */}
                        <div>
                            <label>End:   </label>
                            <input className = "DateTime" type="datetime-local" value={this.state.EndDate} onChange={this.changeEndDate} />
                        </div>
                        <br />
                        <div>
                            <label>Additional Description:   </label>
                            <textarea value={this.state.AdditionalDescription} onChange={this.changeAdditionalDescription} />
                        </div>
                        <br/>
                        {/* <Link to="/allevents"> */}
                            <button class="submitButton" type="submit">Submit</button>
                        {/* </Link> */}
                        <br />
                    </div>
                </form>
                {/* {allEvents} */}
            </div>    
        )
    }
}

export default NewPost;