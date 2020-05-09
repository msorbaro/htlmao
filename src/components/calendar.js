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
            // Fuck this line

            // for (let i=0; i < array.length; i+=1) {
            //     console.log("ARRAY");
            //     console.log(array[i]);
            //     this.state.events.push(array[i]);
                
            // }
            // console.log("Second for loop"+this.state.events[1].start);
            // console.log("Second for loop"+this.state.events[1].end);
            // If this works, events is an array. And events[x] is an object with keys like "title"
            // console.log("State" + this.state.events)
            // console.log("Array" + array);
        }
        // this.setState({events: allEvents});
    }

    // getEvents = (allEvents) =>{
    //     var array = []
    //     for (let i = 0; i < Object.keys(allEvents).length; i+=1) {
    //         const currKey = Object.keys(allEvents)[i];
    //         const currItem = allEvents[currKey];
    //         array.push(currItem);
    //     }
    //     this.setState({events: array});
    // }

    // setCalInfo = (allEvents) => {
    //     if(allEvents!=null) {
    //         var array = []
    //         for (let i = 0; i < Object.keys(allEvents).length; i+=1) {
    //             const currKey = Object.keys(allEvents)[i];
    //             const currItem = allEvents[currKey];
    //             array.push(currItem);
    //         }
    //         this.setState({events: array});
    //     }
    // }

    // setEvents = (allEvents) => {
    //     if (allEvents!= null) {
    //         // var array = Array.from(this.state.events)
    //         var array = []
    //         for (let i = 0; i < Object.keys(allEvents).length; i+=1) {
    //             const currKey = Object.keys(allEvents)[i];
    //             const currItem = allEvents[currKey];
    //             array.push(currItem);
    //         }
    //     this.setState({events: array});
    //     }
    // }

    //filter functions
    // filterAthletics = () => {
    //     var array = Array.from(this.state.events)
    //     if(this.state.showAthletics === false){
    //         for (let i = Object.keys(this.state.unshownEvents).length-1; i >= 0; i -= 1) {
    //           const currKey = Object.keys(this.state.unshownEvents)[i];
    //           const currItem = this.state.unshownEvents[currKey];
    //           if(currItem.state.Category === "Athletics"){
    //             array.push(currItem);
    //             this.state.unshownEvents.splice(i, 1)
    //           }
    //         }
    //         this.setState({events: array})
    //     }
    //     else {
    //         for (let i = Object.keys(this.state.events).length -1 ; i >= 0; i -= 1) {
    //             const currKey = Object.keys(this.state.events)[i];
    //             const currItem = this.state.events[currKey];
    //             if(currItem.state.Category === "Athletics"){
    //                 this.state.unshownEvents.push(currItem);
    //                 array.splice(i, 1)
    //             }       
    //         }
    //     this.setState({events: array})
    //     }
    //     this.setState({ showClasses: !this.state.showClasses })
    // }
    
    render() {
        // console.log(this.state.events)

        // if(this.state.events!=null) {
        //     var array = []
        //     for (let i = 0; i < Object.keys(this.state.events).length; i+=1) {
        //         // const info = (this.state.events)[i];

        //         const currKey = Object.keys(this.state.events)[i];
        //         const currItem = this.state.events[currKey];
        //         array.push(currItem.event);
        //     }
        //     this.setState({events: array});
        //     }

        // if (this.state.events!=null){
        //     // const currKey = Object.event()
        //     listOfEvents = Object.keys(this.state.events).array((id) => {
        //         const info = this.state.events[id];
        //         return {
        //             info.event,
        //             // title: info.EventTitle,
        //             // date: toString(info.Date).replace("/", "-")
        //         }})
        // }
        
        // var pageName = null;
        // if (this.router.url==='/allevents') {
        //     pageName = <p className="pageTitle">All Events</p>
        // }
        // else {
        //     pageName = <p className="pageTitle">My Events</p>
        // }
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
            />
        }

        return (
            <div>
                <div className="bluebox">
                    {/* {pageName} */}
                </div>
                
                <div className = "calAndFilterContainer">
                    <div><Filter/></div>
                    <div>
                    {calendar}
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