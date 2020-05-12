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

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid:"",
            events: [],
            eventID: 0,
            StudentGroup:"",
            EventTitle:"",
            Place:"",
            AdditionalDescription:"",
            Category:"Athletics",
            Food:"No",
            StartDate: "",
            EndDate: "",
        };
    }

    componentDidMount(){
        db.fetchNewPost(this.fetchedNewPosts);
        db.getUser(this.setUser);
    }

    setUser=(userID)=>{
        console.log("you reached setUser")
        this.setState({userid:userID})
        console.log("new post user")
        console.log(this.state.userID)
    }

    fetchedNewPosts= (allEvents) =>{
        this.setState({events: allEvents});
    }

    changeStudentGroup = (event) => {
        this.setState({StudentGroup: event.target.value});
    }
    changeEventTitle = (event) => {
        this.setState({EventTitle: event.target.value});
    }
    changePlace = (event) => {
        this.setState({Place: event.target.value});
    }
    changeAdditionalDescription = (event) => {
        this.setState({AdditionalDescription: event.target.value});
    }
    changeCategory = (event) => {
        this.setState({Category: event.target.value});
    }
    changeFood = (event) => {
        this.setState({Food: event.target.value});
    }
    changeStartDate = (event) => {
        this.setState({StartDate: event.target.value});
    }
    changeEndDate = (event) => {
        this.setState({EndDate: event.target.value});
    }
    
    saveEventInfo = () => {
        let urlTitle=this.state.EventTitle.split(' ').join('+');
        let urlLoc=this.state.Place.split(' ').join('+');
        let urlDet=this.state.AdditionalDescription.split(' ').join('+');

        let tempStartDate = this.state.StartDate + ":00";
        tempStartDate = tempStartDate.split('-').join('');
        tempStartDate = tempStartDate.split(':').join('');

        let tempEndDate = this.state.EndDate + ":00";
        tempEndDate = tempEndDate.split('-').join('');
        tempEndDate = tempEndDate.split(':').join('');

        let tempURLDates = tempStartDate+"/"+tempEndDate;
        let urlDates=tempURLDates;

        let calStartDateTimeArr=this.state.StartDate.split('T');
        let calStartDateArr=calStartDateTimeArr[0].split('-');
        let newStartDate=calStartDateArr[1]+"-"+calStartDateArr[2]+"-"+calStartDateArr[0];
        let newStartTime=calStartDateTimeArr[1];
        let calStartDate=newStartDate+", "+newStartTime;

        let calEndDateTimeArr=this.state.EndDate.split('T');
        let calEndDateArr=calEndDateTimeArr[0].split('-');
        let newEndDate=calEndDateArr[1]+"-"+calEndDateArr[2]+"-"+calEndDateArr[0];
        let newEndTime=calEndDateTimeArr[1];
        let calEndDate=newEndDate+", "+newEndTime;

        let eventBackgroundColor = '#007D5F';
        let thisCategory=this.state.Category;

        if (thisCategory==="Athletics") {
            eventBackgroundColor = '#36A300';
        }
        else if (thisCategory==="Music") {
            eventBackgroundColor = '#2B8F00';
        }
        else if (thisCategory==="Dance") {
            eventBackgroundColor = '#1A6900';
        }
        else if (thisCategory==="Art") {
            eventBackgroundColor = '#01571C';
        }
        else if (thisCategory==="Greek") {
            eventBackgroundColor = '#00A18C';
        }
        else if (thisCategory==="Club") {
            eventBackgroundColor = '#0091A1';
        }
        else if (thisCategory==="Health") {
            eventBackgroundColor = '#0073A1';
        }
        else if (thisCategory==="Professional") {
            eventBackgroundColor = '#004BA1';
        }
        else if (thisCategory==="Religious") {
            eventBackgroundColor = '#002BA1';
        }
        else if (thisCategory==="Other") {
            eventBackgroundColor = '#0015A1';
        }

        var event = {
            title: this.state.EventTitle,
            start: this.state.StartDate + ":00",
            end: this.state.EndDate + ":00",
            className: 'event' + this.state.Category + this.state.Food,

            backgroundColor: eventBackgroundColor,
            borderColor: eventBackgroundColor,
            textColor: 'white',

            extendedProps: {
                userID: this.state.userid,
                studentGroup: this.state.StudentGroup,
                place: this.state.Place,
                description: this.state.AdditionalDescription,
                category: this.state.Category,
                food: this.state.Food,
                start: calStartDate,
                end: calEndDate,
                url:" https://www.google.com/calendar/render?action=TEMPLATE&text="+urlTitle+"&dates="+urlDates+"&location="+urlLoc+"&details="+urlDet,
            }
        }

        db.addNewPost(
            this.state.StudentGroup,
            this.state.EventTitle,
            this.state.Place,
            this.state.AdditionalDescription,
            this.state.Category,
            this.state.Food,
            this.state.StartDate,
            this.state.EndDate,
            event,
        );
        this.setState({
            StudentGroup:"",
            EventTitle:"",
            Place:"",
            AdditionalDescription:"",
            Category:"Athletics",
            Food:"No",
            StartDate: "",
            EndDate: "",
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

        return (
            <div class="trial">
                <NavBar/>

                <form onSubmit={this.saveEventInfo}>
                    <div class="OuterContainer">
                        <div>
                            <h1 className= "Header">New Post</h1>
                        </div>
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
                                <option value="Athletics">Athletics</option>
                                <option value="Music">Music</option>
                                <option value="Dance">Dance</option>
                                <option value="Art">Art</option>
                                <option value="Professional">Professional</option>
                                <option value="Clubs">Clubs</option>
                                <option value="Religious">Religious</option>
                                <option value="Greek">Greek Life</option>
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
                            <button class="submitButton" type="submit">Submit</button>
                        <br />
                    </div>
                </form>
                {/* {allEvents} */}
            </div>
        )
    }
}

export default NewPost;