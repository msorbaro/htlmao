import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Filter from './filter';
import * as db from '../datastore.js';
import Event from './event';
import '../App.css'
import firebase from 'firebase';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {events: null, authenticated: false};

    }

    componentDidMount(){
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

    fetchedNewPosts= (allEvents) =>{
        this.setState({events: allEvents});
    }

    render() {
        // let allEvents=null;
        // if (this.state.events!=null){
        //     allEvents = Object.keys(this.state.events).map((id) => {
        //         const info = this.state.events[id];
        //         return <Event 
        //           save={this.save} 
        //           delete={this.delete} 
        //           studentGroup={info.StudentGroup} 
        //           eventTitle={info.EventTitle} 
        //           time={info.Time} 
        //           place={info.Place} 
        //           additionalDescription={info.AdditionalDescription}
        //           category={info.Category}
        //           food={info.Food}
        //           id={id} />
        //       })
        // }
        let listOfPairs = null;

        if (this.state.events!=null){
            listOfPairs = Object.keys(this.state.events).map((id) => {
                const info = this.state.events[id];
                return {
                    // time: info.Time,
                    title: info.EventTitle,
                    date: toString(info.Date).replace("/", "-")
                }})
                
            //     return <Event 
            //       save={this.save} 
            //       delete={this.delete} 
            //       studentGroup={info.StudentGroup} 
            //       eventTitle={info.EventTitle} 
            //       time={info.Time} 
            //       place={info.Place} 
            //       additionalDescription={info.AdditionalDescription}
            //       category={info.Category}
            //       food={info.Food}
            //       id={id} />
            //   })
        }

        // let listOfPairs=[{title: 'event 1', date: '2020-04-24'}]

        // var pageName = null;
        // if (this.router.url==='/allevents') {
        //     pageName = <p className="pageTitle">All Events</p>
        // }
        // else {
        //     pageName = <p className="pageTitle">My Events</p>
        // }

        return (
            <div>
                <div className="bluebox">
                    {/* {pageName} */}
                </div>
                
                <div className = "calContainer">
                    <Filter/>
                    <FullCalendar
                defaultView="dayGridWeek" 
                plugins={[ dayGridPlugin ]}
                // events={[
                //     {title: 'event 1', date: '2020-04-24'},
                //     {title: 'event 2', date: '2020-04-25'}
                // ]}
                // events={[{title: ''}]}
                events={listOfPairs}



                />
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