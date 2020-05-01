import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import NavBar from './navbar';
import Filter from './filter';
import * as db from '../datastore.js';
import Event from './event';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {events: null};
    }

    componentDidMount(){
        db.fetchNewPost(this.fetchedNewPosts);
    }

    fetchedNewPosts= (allEvents) =>{
        this.setState({events: allEvents});
    }

    render() {
        let listOfPairs = null;
        let allEvents=null;
        if (this.state.events!=null){
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

        if (this.state.events!=null){
            listOfPairs = Object.keys(this.state.events).map((id) => {
                const info = this.state.events[id];
                return {
                    time: info.Time,
                    eventTitle: info.EventTitle
                }
                
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
                <Filter/>
                <FullCalendar 
                defaultView="dayGridWeek" 
                plugins={[ dayGridPlugin ]}
                // events={[
                //     {title: 'event 1', date: '2020-04-24'},
                //     {title: 'event 2', date: '2020-04-25'}
                // ]}
                events={[{title: ''}]}
                />
            </div>
        )
    }

    // handleDateClick = (arg) => {
    //     alert(arg.dateStr);
    // }

    handleEventClick = (arg) => {
        
    }

}

export default Calendar;