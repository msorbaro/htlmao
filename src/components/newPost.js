import React, {Component} from 'react';
import { flexibleCompare } from '@fullcalendar/core';
import '../newPostStyles.css';

class NewPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            StudentGroup:"",
            EventTitle:"",
            Time:"",
            Place:"",
            AdditionalDescription:"",
            Category:"Athletics",
            Food:"No"
        };
    }

    // How to delete everything
    // Every new event or post should have an id passed to it as a prop
    deletePosting = () => {
        this.props.delete(this.props.id)
    }
    changeStudentGroup = (event) => {
        this.setState({StudentGroup: event.target.value});
        // console.log(this.state.StudentGroup);
    }
    changeEventTitle = (event) => {
        this.setState({EventTitle: event.target.value});
        // console.log(this.state.EventTitle);
    }
    changeTime = (event) => {
        this.setState({Time: event.target.value});
        // console.log(this.state.Time);
    }
    changePlace = (event) => {
        this.setState({Place: event.target.value});
        // console.log(this.state.Place);
    }
    changeAdditionalDescription = (event) => {
        this.setState({AdditionalDescription: event.target.value});
        // console.log(this.state.AdditionalDescription);
    }
    changeCategory = (event) => {
        this.setState({Category: event.target.value});
        // console.log(this.state.Category);
    }
    changeFood = (event) => {
        this.setState({Food: event.target.value});
        // console.log(this.state.Food);
    }
    handleSubmit = (event) => {
        // Submitted my shit
        // console.log(this.state.StudentGroup);
        // console.log(this.state.Category);
        // console.log(this.state.AdditionalDescription);
        alert(this.state.StudentGroup +" "+ this.state.Category +" "+ this.state.AdditionalDescription);
        event.preventDefault()
        // The above line prevents shit from resreshing and being set to null or default value
    }

    // This looks dumb as hell right now
    // I will try to add some functionality
    // All the informatio that is passed in is saved in the state and should be displayed using that

    render() {
        return (
            // <div>
            //     <p>I'm the component for a new post!</p>
            //     <div class="OuterContainer">
            //         <div class="StudentGroup pairs">
            //             <p>Student Group</p>
            //             <input type="text" value={this.state.StudentGroup} onChange={this.changeStudentGroup}/>
            //         </div>
            //         <div class="EventTitle pairs">
            //             <h3>Event Title</h3>
            //             <input type="text pairs" value={this.state.EventTitle} onChange={this.changeEventTitle}/>
            //         </div>
            //         <div class="Time pairs">
            //             <h3>Time</h3>
            //             <input type="text" value={this.state.Time} onChange={this.changeTime}/>
            //         </div>
            //         <div class="Place pairs">
            //             <h3>Place</h3>
            //             <input type="text" value={this.state.Place} onChange={this.changePlace}/>
            //         </div>
            //         <div class="Category">
            //             <input type="checkbox" /> <p>Athletics</p>
            //             <input type="checkbox" /> <p>Programming</p>
            //             <input type="checkbox" /> <p>Professional</p>
            //         </div>
            //         <div class="FoodProvided">
            //             <p>Food Provided?</p>
            //             <input type="checkbox" /> <p>Yes</p>
            //             <input type="checkbox" /> <p>No</p>
            //         </div>
            //         <div class="AdditionalDescription">
            //             <p>Additional Description?</p>
            //             <textarea type="text" rows="20" cols="80"/>
            //         </div>
            //         <div>
            //             <button>Submit</button>
            //         </div>
            //     </div>
            // </div>
            <form onSubmit={this.handleSubmit}>
                <div class="OuterContainer">
                    <br />
                    <div>
                        <label>Student Group:   </label>
                        <input class="occupy" type="text" value={this.state.StudentGroup} onChange={this.changeStudentGroup} /> 
                        {/* If i do not have the value set to this thing, even i type anyhing in the box, it will not show up */}
                    </div>
                    <br />
                    <div>
                        <label>Event Title:   </label>
                        <input class="occupy" type="text" value={this.state.EventTitle} onChange={this.changeEventTitle}/>
                    </div>
                    <br />
                    <div>
                        <label>Time:   </label>
                        <input class="occupy" type="text" value={this.state.Time} onChange={this.changeTime}/>
                    </div>
                    <br />
                    <div>
                        <label>Place:   </label>
                        <input class="occupy" type="text" value={this.state.Place} onChange={this.changePlace}/>
                    </div>
                    <br />
                    <div>
                        <label>Category:   </label>
                        <select value={this.state.Category} onChange={this.changeCategory}>
                            <option value="Atheltics">Athletics</option>
                            <option value="Programming">Programming</option>
                            <option value="Professional">Professional</option>
                            <option value="Performance">Performance</option>
                            <option value="Clubs">Clubs</option>
                            <option value="Religious">Religious</option>
                            <option value="Art">Art</option>
                            <option value="Guest Speaker">Guest Speaker</option>
                            <option value="Greek Life">Greek Life</option>
                            <option value="Health">Health</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label>Food Provided?   </label>
                        <select value={this.state.Food} onChange={this.changeFood}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label>Additional Description:   </label>
                        <textarea value={this.state.AdditionalDescription} onChange={this.changeAdditionalDescription} />
                    </div>
                    <br />
                    <button class="submitButton" type="submit">Submit</button>
                    <br />
                </div>
            </form>
        )
    }
}

export default NewPost;