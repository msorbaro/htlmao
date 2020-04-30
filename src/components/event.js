import React, {Component} from 'react';

class Event extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

  deletePosting = () => {
    this.props.delete(this.props.id)
}

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

    render() {
        return (
            <div>
                <p>Group: {this.props.studentGroup}</p>
                <p>Date: {this.props.eventTitle}</p>
                <p>Time: {this.props.time}</p>
                <p>Place: {this.props.place}</p>
                <p>{this.props.additionalDescription}</p>
                <p>Category: {this.props.category}</p>
                <p>Food provided? {this.props.food}</p>
                <button onClick={this.deletePosting}>Delete meeee</button>

                {/* <button>Save Event</button> */}
            </div>


        )
    }
}

export default Event;

