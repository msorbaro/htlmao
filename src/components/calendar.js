import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import NavBar from './navbar';
import Filter from './filter';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        
        return (
            <div>
                <Filter/>
                <FullCalendar 
                defaultView="dayGridWeek" 
                plugins={[ dayGridPlugin ]}
                events={[
                    {title: 'event 1', date: '2020-04-24'},
                    {title: 'event 2', date: '2020-04-25'}
                ]}
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