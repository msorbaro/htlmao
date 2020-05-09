import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './calendar.css'


class Event extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {}
    // }
    render() {
        if(!this.props.show) {
            // console.log("show is false")
            return null;
        }
        else{
            // console.log("show is true")
        return (
            <div className="modal">
                <div className="modalTitle">[event title]</div>
                {this.props.children}
                <p>the modal is open</p>
                <div className="modalButton">
                    <button onClick={this.props.onClose}>Close</button>
                    <button onClick={this.props.addMyEvent}>Save to My Events</button>
                </div>
            </div>
        )
        };
    }
}

Event.propTypes={
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children:PropTypes.node
}
    // deletePosting = () => {
    //     this.props.delete(this.props.id)
    // }

//   handleSubmit = () => {
//     var eventData = {
//         studentGoup: this.state.StudentGroup,
//         eventTitle: this.state.EventTitle,
//         time: this.state.Time,
//         place: this.state.Place,
//         additionalDescription: this.state.AdditionalDescription,
//         category: this.state.Category,
//         food: this.state.Food
//       }

//       console.log("here")

//     this.setState({
//         events: this.state.events.set(this.state.eventID, eventData),
//         eventID: this.state.eventID +1,
//         // StudentGroup:"",
//         // EventTitle:"",
//         // Time:"",
//         // Place:"",
//         // AdditionalDescription:"",
//         // Category:"Athletics",
//         // Food:"No"
//     })
// }

//     render() {
//         return (
//             <div>
//                 <p>Group: {this.props.studentGroup}</p>
//                 <p>Title: {this.props.eventTitle}</p>
                
//                 <p>Start: {this.props.startDate}</p>
//                 <p>End: {this.props.endDate}</p>
//                 <p>Place: {this.props.place}</p>
//                 <p>{this.props.additionalDescription}</p>
//                 <p>Category: {this.props.category}</p>
//                 <p>Food provided? {this.props.food}</p>
//                 <button onClick={this.deletePosting}>Delete Event</button>

//                 {/* <button>Save Event</button> */}
//             </div>


//         )
//     }
// }

export default Event;

