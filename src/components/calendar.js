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

                //beginning state is false?
            showAthletics: false,
            showMusic: false,
            showDance: false,
            showArt: false,
            showGreekLife: false,
            // showProgramming: false,
            showClub: false,
            // showGuestSpeaker: false,
            showHealth: false,
            showProfessional: false,
            showReligious: false,
            showFood: false,
            showOther: false,

            isOpen: false,

            allEventsPage: true,


            oneEventTitle: "hello:)",
            oneEventStart: null,
            oneEventEnd: null,
            oneEventGroup: null,
            oneEventPlace: null,
            oneEventDescription: null,
            oneEventCategory: null,
            oneEventFood: null,

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
        db.fetchNewPost(this.fetchedNewPosts); //fetchedNewPosts is equivalent to callback
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

    closeModal=()=>{
        this.setState({isOpen:false})
    }

    openModal=(allEvents)=>{
        // var title = allEvents.event.title;
        // var start = allEvents.event.start;
        // var group = allEvents.event.extendedProps.studentGroup;

        // console.log(title);
        // console.log(start);
        // console.log(group);
        console.log("url: "+allEvents.event.extendedProps.url)

        this.setState({oneEventTitle: allEvents.event.title});
        this.setState({oneEventStart: allEvents.event.extendedProps.start});
        this.setState({oneEventEnd: allEvents.event.extendedProps.end});
        this.setState({oneEventGroup: allEvents.event.extendedProps.studentGroup});
        this.setState({oneEventPlace: allEvents.event.extendedProps.place});
        this.setState({oneEventDescription: allEvents.event.extendedProps.description});
        this.setState({oneEventCategory: allEvents.event.extendedProps.category});
        this.setState({oneEventFood: allEvents.event.extendedProps.food});
      
        this.setState({isOpen: true})

        // console.log(this.state.oneEventStart)
        // console.log(this.state.oneEventEnd)

    };
    


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


    athleticsClicked=()=>{
        if (this.state.showAthletics===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className.includes("eventAthletics")) {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className.includes("eventAthletics")) {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
            console.log("unshown "+this.state.unshownEvents)
        }
        this.setState({showAthletics: !this.state.showAthletics})
    }






    musicClicked=()=>{
 

        if (this.state.showMusic===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className.includes("eventMusic")) {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})


        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className.includes("eventMusic")) {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
            console.log("unshown "+this.state.unshownEvents)
        }
        this.setState({showMusic: !this.state.showMusic})
    }



    danceClicked=()=>{
        if (this.state.showDance===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className.includes("eventDance")) {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className.includes("eventDance")) {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showDance: !this.state.showDance})
    }


    artClicked=()=>{
        if (this.state.showArt===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className.includes("eventArt")) {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className.includes("eventArt")) {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showArt: !this.state.showArt})
    }


    greekClicked=()=>{
        if (this.state.showGreekLife===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className.includes("eventGreek")) {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className.includes("eventGreek")) {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showGreekLife: !this.state.showGreekLife})
    }


    clubClicked=()=>{
        if (this.state.showClub===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className.includes("eventClub")) {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className.includes("eventClub")) {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showClub: !this.state.showClub})
    }


    healthClicked=()=>{
        if (this.state.showHealth===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className.includes("eventHealth")) {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className.includes("eventHealth")) {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showHealth: !this.state.showHealth})
    }

    professionalClicked=()=>{
        if (this.state.showProfessional===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className.includes("eventProfessional")) {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className.includes("eventProfessional")) {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showProfessional: !this.state.showProfessional})
    }

    religiousClicked=()=>{
        if (this.state.showReligious===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className.includes("eventReligious")) {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className.includes("eventReligious")) {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showReligious: !this.state.showReligious})
    }


    otherClicked=()=>{
        if (this.state.showOther===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className.includes("eventOther")) {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className.includes("eventOther")) {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showOther: !this.state.showOther})
    }



    foodClicked=()=>{
        if (this.state.showFood===false){ 
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.unshownEvents).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.unshownEvents)[i];
                const currItem=this.state.unshownEvents[currKey];
                if(currItem.className.includes("Yes")) {
                    array.push(currItem);
                    this.state.unshownEvents.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        else {
            var array = Array.from(this.state.events)
            for(let i=Object.keys(this.state.events).length-1;i>=0;i-=1) {
                const currKey=Object.keys(this.state.events)[i];
                const currItem=this.state.events[currKey];
                if(currItem.className.includes("Yes")) {
                    this.state.unshownEvents.push(currItem)
                    array.splice(i,1)
                }
            }
            this.setState({events:array})
        }
        this.setState({showFood: !this.state.showFood})
    }


    render() {
 
        // var hardEvents = [{title: 'Wrong 1', date: '2020-05-08'},
        // {title: 'event 2', start:'2020-05-07T13:00:00', end: '2020-05-07T14:00:00'}];
        // // var calendar = <FullCalendar
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
        // if (this.state.events != null && this.state.events.length !== 0) {
            calendar =
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin ]}
                    events={this.state.events}
                    eventClick={this.openModal}
            />
        // }
        let pageTitle = "All Events"
        if (!this.state.allEventsPage) {
            pageTitle = "My Events"
        }

        return (
            <div>
                <NavBar myevents={this.changeToMyEvents} allevents={this.changeToAllEvents}/>
                {/* <div className="bluebox">
                    <p className="pageTitle">{pageTitle}</p>
                </div> */}
                <div className = "calAndFilterContainer">
                    <div><Filter
                    athleticsClicked={this.athleticsClicked}
                    musicClicked={this.musicClicked}
                    danceClicked={this.danceClicked}
                    artClicked={this.artClicked}
                    greekClicked={this.greekClicked}
                    clubClicked={this.clubClicked}
                    healthClicked={this.healthClicked}
                    professionalClicked={this.professionalClicked}
                    religiousClicked={this.religiousClicked}
                    foodClicked={this.foodClicked}
                    otherClicked={this.otherClicked}

                    /></div>
                    <div>
                    {calendar}

                    <div className="eventmodal">
                        <Event show={this.state.isOpen} 
                        oneEventTitle={this.state.oneEventTitle}
                        oneEventCategory={this.state.oneEventCategory}
                        oneEventDescription={this.state.oneEventDescription}
                        oneEventPlace={this.state.oneEventPlace}
                        oneEventGroup={this.state.oneEventGroup}
                        oneEventEnd={this.state.oneEventEnd}
                        oneEventStart={this.state.oneEventStart}
                        oneEventFood={this.state.oneEventFood}
                        onClose={this.closeModal} 
                        addMyEvent={this.addMyEvent}>
                        {/* <div className="eventInfo">
                            hello
                        </div> */}

                        <div>
                            <p>Student Group: {this.state.oneEventGroup}</p>
                            <p>Place: {this.state.oneEventPlace}</p>
                            <p>Category: {this.state.oneEventCategory}</p>
                            <p>Food Provided: {this.state.oneEventFood}</p>
                            <p>Start: {this.state.oneEventStart}</p>
                            <p>End: {this.state.oneEventEnd}</p>
                            <p>Additional Description: {this.state.oneEventDescription}</p>
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
