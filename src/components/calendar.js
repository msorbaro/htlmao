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

            userid:null,
            authenticated: false,
            events: [],
            dbEvents: [],
            oneEvent: null,
            unshownEvents: [],
            //beginning state is false?
            showAthletics: true,
            showMusic: true,
            showDance: true,
            showArt: true,
            showGreekLife: true,
            // showProgramming: true,
            showClub: true,
            // showGuestSpeaker: true,
            showHealth: true,
            showProfessional: true,
            showReligious: true,
            showFood: true,
            showOther: true,
            allUnchecked: false,

            isOpen: false,
            showTrash: false,

            allEventsPage: true,

            oneEventUserID:null,
            oneEventTitle: "hello:)",
            oneEventStart: null,
            oneEventEnd: null,
            oneEventGroup: null,
            oneEventPlace: null,
            oneEventDescription: null,
            oneEventCategory: null,
            oneEventFood: null,
            oneEventURL: null,
            oneEventID: null,

            eventID:0,

        };
    }
    calendarRef = React.createRef();


    delete = () => {
        console.log("you are in delete")
        // console.log(this.state.oneEventUserID)
        // console.log(this.state.userID)
        // if(this.state.oneEventUserID===this.state.userID){
        this.setState({isOpen:false})
        // console.log("eventID");
        // console.log(this.state.oneEventID);
        db.removeNewPost(this.state.oneEventID);
        // NewPost.delete(eventID);
       db.fetchNewPost(this.fetchedNewPosts);
        // Is there a way to call newPost.delete from this place
        // }
        // else {
        //     alert("you cannot delete this")
        // }

}

    // sendEmail =()=>{
    //     //import emailjs
    //     var templateParams={
    //         title: this.state.oneEventTitle
    //     }
    //     emailjs.send('gmail','testevent', templateParams)
    //     .then(function(response) {
    //         console.log('SUCCESS!',response.status,response.text);
    //     }, function(error){
    //         console.log('FAILED...',error);
    //     });
    //     emailjs.sendForm('gmail','testevent', templateParams,'user_GW5Sn4mGVb9wjgL4Ot4MT')
    // }



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
        db.getUser(this.setUserID);
    }
    setUserID=(userID)=>{
        console.log("calendar user id:");
        console.log(this.state.userid)
        this.setState({userid: userID})
    }

    fetchedNewPosts = (allEvents) => {
        console.log("HERE");
        console.log(allEvents);
        if(allEvents!=null) {
            var array = []
            for (let i = 0; i < Object.keys(allEvents).length; i+=1) {
                const currKey = Object.keys(allEvents)[i];
                console.log(currKey);
                const currItem = allEvents[currKey];
            
                const copyOfEvent = currItem.event;
                copyOfEvent.eventID = currKey;
         
                array.push(copyOfEvent);
            }
            // console.log("Array");
            // console.log(array);
            this.setState({events: array});
        }
        this.setState({dbEvents: allEvents});
        // this.setState({events: allEvents});
    }

    addMyEvent=()=> {
        window.open(this.state.oneEventURL, "_blank");
    }

    closeModal=()=>{
        this.setState({isOpen:false})
    }

    openModal=(fullCalendarClickedEvent)=>{

        // console.log(fullCalendarClickedEvent);
        // console.log("url: "+allEvents.event.extendedProps.url)
        // console.log(this.state.events);
        // this.setState({oneEvent: fullCalendarClickedEvent.event})


        this.setState({oneEventTitle: fullCalendarClickedEvent.event.title});
        this.setState({oneEventUserID: fullCalendarClickedEvent.event.extendedProps.userID})
        this.setState({oneEventStart: fullCalendarClickedEvent.event.extendedProps.start});
        this.setState({oneEventEnd: fullCalendarClickedEvent.event.extendedProps.end});
        this.setState({oneEventGroup: fullCalendarClickedEvent.event.extendedProps.studentGroup});
        this.setState({oneEventPlace: fullCalendarClickedEvent.event.extendedProps.place});
        this.setState({oneEventDescription: fullCalendarClickedEvent.event.extendedProps.description});
        this.setState({oneEventCategory: fullCalendarClickedEvent.event.extendedProps.category});
        this.setState({oneEventFood: fullCalendarClickedEvent.event.extendedProps.food});
        this.setState({oneEventURL: fullCalendarClickedEvent.event.extendedProps.url})
        this.setState({oneEventID: fullCalendarClickedEvent.event.extendedProps.eventID})

        if (this.state.oneEventUserID===this.state.userID){
            console.log("ids match!")
            this.setState({showTrash:true})
        }
        else{
            console.log("ids don't match")
            this.setState({showTrash:false})
        }
      
        this.setState({isOpen: true})

        // console.log("one event id: ")
        // console.log(this.state.oneEventUserID);

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
        // if (this.state.allUnchecked===true){
        //     this.setState({allUnchecked: false});
        //     this.setState({unshownEvents: this.state.events});
        //     this.setState({events: null});
        //     console.log(this.state.unshownEvents);
        // }
        if (this.state.showAthletics===false){ 
            // we do wanna show athletics events
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
                    defaultView="timeGridWeek"
                    plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin ]}
                    // header={
                    //     center="title",
                    //     left="prev,next today",
                    //     right="dayGridMonth,timeGridWeek,timeGridDay"
                    // }
                
                

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

                     <div class="fullCalendar">{calendar}</div>   
                    



                    <div class="modalsouterclass">
                    <div className="eventmodal">
                        <Event show={this.state.isOpen} 
                        url={this.state.oneEventURL}
                        oneEventTitle={this.state.oneEventTitle}
                        showTrash={this.state.showTrash}
                        // oneEventCategory={this.state.oneEventCategory}
                        // oneEventDescription={this.state.oneEventDescription}
                        // oneEventPlace={this.state.oneEventPlace}
                        // oneEventGroup={this.state.oneEventGroup}
                        // oneEventEnd={this.state.oneEventEnd}
                        // oneEventStart={this.state.oneEventStart}
                        // oneEventFood={this.state.oneEventFood}
                        delete={this.delete}

                        onClose={this.closeModal} 
                        addMyEvent={this.addMyEvent}
                        >
                        {/* <div className="eventInfo">
                            hello
                        </div> */}

                        <div class="NotGridMasonSadIndeed">
                            <p class="notHeader">{this.state.oneEventTitle}</p>
                            <div class="splitMe">
                                <div class="leftHalf">
                                    <p> <span className="bold">Student Group: </span><span className="notBold">{this.state.oneEventGroup}</span></p>
                                    <p> <span className="bold">Place: </span><span className="notBold">{this.state.oneEventPlace}</span></p>
                                    <p> <span className="bold">Category: </span><span className="notBold">{this.state.oneEventCategory}</span></p>
                                    <p> <span className="bold">Food Provided: </span><span className="notBold">{this.state.oneEventFood}</span></p>
                                    <p> <span className="bold">Start: </span><span className="notBold">{this.state.oneEventStart}</span></p>
                                    <p> <span className="bold">End: </span><span className="notBold">{this.state.oneEventEnd}</span></p>
                                </div>
                                <div class="rightHalf">
                                    <p className="bold">Additional Description:</p>
                                    <p className="notBold">{this.state.oneEventDescription}</p>
                                </div>
                            </div>
                            {/* <button>Delete modal</button> */}
                        </div>

                        </Event>
                    </div>
                    </div>

                        {/* <FullCalendar
                        defaultView="timeGridWeek"
                        plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin ]}
                        // events={this.state.events}
                        /> */}
                    </div>
                </div>


                {/* <script type="text/javascript"
                src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.1/dist/email.min.js">
                </script>
                    <script type="text/javascript">
                    (function(){
                     emailjs.init("user_GW5Sn4mGVb9wjgL4Ot4MT");
                    })();
                </script> */}


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
