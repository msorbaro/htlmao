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
            <div class="modalsouterclass">
            <div className="modal">
                {/* <header className="modalTitle"> HJEHJ</header> */}
                {/* {this.props.oneEventTitle} */}
                {this.props.children}
                {/* <br /> */}
                <div className="modalButton">
                    {/* <button onClick={this.props.onClose}>Close</button>
                    <button onClick={this.props.addMyEvent}>Add me to your <image src={"https://blog.hubspot.com/hubfs/image8-2.jpg"}/>calendar</button>
                    <button onClick={this.props.delete}>Delete this event</button> */}
                    {/* <button class="crazyZScore"onClick={this.props.onClose}><image class="gImage" src={require("../images/wine.png")} alt="imgNotHere"/> Close</button> */}
                    {/* <image  src={require("../images/wine.png")} alt="imgNotHere"/> */}
                    <a><img class="gImage" onClick={this.props.onClose} src={require("../images/xbutton.png")} alt="google logo"/></a>
                    <a><img class="gImage" onClick={this.props.addMyEvent} src={require("../images/calendar.png")} alt="google logo"/></a>
                    <a><img class="gImage" onClick={this.props.delete} src={require("../images/delete.png")} alt="google logo"/></a>
                    {/* <button class="crazyZScore"onClick={this.props.addMyEvent}><image class="gImage" src={require('../images/wine.png')} alt="imgNotHere"/> Add to Google</button>
                    <button class="crazyZScore"onClick={this.props.delete}><image class="gImage" src={require('../images/wine.png')} alt="imgNotHere"/> Delete</button> */}
                </div>
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

