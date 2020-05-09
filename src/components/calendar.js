import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Filter from './filter';
import * as db from '../datastore.js';
import Event from './event';
import '../App.css'
import firebase from 'firebase';
import './calendar.css'
import NavBar from './navbar'

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            events: [],
            unshownEvents: [],
            showAthletics: true,
            showMusic: true,
            showDance: true,
            showArt: true,
            showGreekLife: true,
            showProgramming: true,
            showClub: true,
            showGuestSpeaker: true,
            showHealth: true,
            showProfessional: true,
            showReligious: true,
            showFoodProvided: true,
            showOther: true,

            isOpen: false,

            allEventsPage: true
        };
    }
    calendarRef = React.createRef();
    async componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({authenticated: true});
                this.setState({email: user.email});
                // Do we even need this email and ID thing?
                this.setState({userID: user.uid});
            }
        });
        db.fetchNewPost(this.fetchedNewPosts);
    }
    fetchedNewPosts = (allEvents) => {
        console.log("HERE");
        if(allEvents!=null) {
            var array = []
            for (let i = 0; i < Object.keys(allEvents).length; i+=1) {
                const currKey = Object.keys(allEvents)[i];
                // console.log(currKey);
                const currItem = allEvents[currKey];
                // console.log(currItem);
                // console.log("Event in item"+currItem.event);
                array.push(currItem.event);
            }
            // console.log("Array");
            // console.log(array);
            this.setState({events: array});

        }
        // this.setState({events: allEvents});
    }

    addMyEvent=()=> {
        //do something
    }

    toggleModal=()=>{
        this.setState({isOpen: !this.state.isOpen})
        console.log("isOpen: "+this.state.isOpen)
    }

    changeToAllEvents=()=>{
        if (!this.state.allEventsPage){
            this.setState({allEventsPage:true})
        }
    }
    changeToMyEvents=()=>{
        if (this.state.allEventsPage){
            this.setState({allEventsPage:false})
        }
    }

    render() {
 
        var hardEvents = [{title: 'Wrong 1', date: '2020-05-08'},
        {title: 'event 2', start:'2020-05-07T13:00:00', end: '2020-05-07T14:00:00'}];
        // var calendar = <FullCalendar
        // ref={this.calendarRef}
        // defaultView="dayGridMonth"
        // // Or dayGridMonth timeGridWeek
        // plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin ]}
        // events = {hardEvents}
        // />
        var calendar = null;
        // console.log(hardEvents);
        // console.log("I am not null!!! Events next");
        // console.log(this.state.events);
        // console.log("Length " + this.state.events.length);
        if (this.state.events != null && this.state.events.length !== 0) {
            calendar =
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin ]}
                    events={this.state.events}
                    eventClick={this.toggleModal}
            />
        }
        let pageTitle = "All Events"
        if (!this.state.allEventsPage) {
            pageTitle = "My Events"
        }

        return (
            <div>
                <NavBar myevents={this.changeToMyEvents} allevents={this.changeToAllEvents}/>
                <div className="bluebox">
                    <p className="pageTitle">{pageTitle}</p>
                </div>
                <div className = "calAndFilterContainer">
                    <div><Filter/></div>
                    <div>
                    {calendar}

                    <div className="eventmodal">
                        <Event show={this.state.isOpen} onClose={this.toggleModal} addMyEvent={this.addMyEvent}>
                        <div className="eventInfo">
                            hello
                        </div>
                        </Event>
                    </div>

                        {/* <FullCalendar
                        defaultView="timeGridWeek"
                        plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin ]}
                        // events={this.state.events}
                        /> */}
                    </div>
                </div>
            </div>
        )
    }
    // handleDateClick = (arg) => {
    //     alert(arg.dateStr);
    // }
    // handleEventClick = (arg) => {
    // }
}
export default Calendar;
