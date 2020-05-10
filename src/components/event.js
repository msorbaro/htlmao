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

            // console.log("event title: "+this.props.oneEventTitle)
            // console.log("show is true")
        return (
            <div className="modal">
                <div className="modalTitle">{this.props.oneEventTitle}</div>
                {this.props.children}
                
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
 


export default Event;

