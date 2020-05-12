import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './calendar.css'


class Event extends Component {

    render() {
        if(!this.props.show) {
            return null;
        }
        else{

            let trash=null;
            if (this.props.showTrash){
                trash=<a><img class="gImage" onClick={this.props.delete} src={require("../images/delete.png")} alt="google logo"/></a>
            }

        return (
            <div class="modalsouterclass">
            <div class="modal">
 
                {this.props.children}
                <div className="modalButton">
    
                    <a><img class="gImage" onClick={this.props.onClose} src={require("../images/xbutton.png")} alt="google logo"/></a>
                    <a><img class="gImage" onClick={this.props.addMyEvent} src={require("../images/calendar.png")} alt="google logo"/></a>
                    {trash}
                    
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

