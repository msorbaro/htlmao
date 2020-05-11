import React, {Component} from 'react';
import './filterStyles.css';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }



    render() {
        return (
            <div className="filterContainer">
                <legend>Filter By:</legend>
                <ul class="checkbox">
                    {/* <li>
                        <input type="checkbox" id="athletics" name="category" onClick={this.athleticsClicked}></input>
                        <label for="athletics">Athletics</label> 
                    </li>  */}
                    <li>
                        <input type="checkbox" defaultChecked="true" id="athletics" name="category" onChange={this.props.athleticsClicked} ></input>
                        <label for="athletics">Athletics</label>
                    </li> 
                    <li>
                        <input type="checkbox" defaultChecked="true" id="music" name="category" onChange={this.props.musicClicked}></input>
                        <label for="music">Music</label>
                    </li> 
                    <li>
                        <input type="checkbox" defaultChecked="true" id="dance" name="category" onChange={this.props.danceClicked}></input>
                        <label for="dance">Dance</label> 
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked="true" id="art" name="category" onChange={this.props.artClicked}></input>
                        <label for="art">Art</label>
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked="true" id="greek" name="category" onChange={this.props.greekClicked}></input>
                        <label for="greek">Greek Life</label> 
                    </li>
                    {/* <li>
                        <input type="checkbox" id="programming" name="category" onClick={this.programmingClicked}></input>
                        <label for="programming">Programming</label> 
                    </li> */}
                    <li>
                        <input type="checkbox" defaultChecked="true" id="club" name="category" onChange={this.props.clubClicked}></input>
                        <label for="club">Club</label> 
                    </li>
                    {/* <li>
                        <input type="checkbox" id="speaker" name="category" onClick={this.speakerClicked}></input>
                        <label for="speaker">Guest Speaker</label> 
                    </li> */}
                    <li>
                        <input type="checkbox" defaultChecked="true" id="health" name="category" onChange={this.props.healthClicked}></input>
                        <label for="health">Health</label> 
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked="true" id="professional" name="category" onChange={this.props.professionalClicked}></input>
                        <label for="professional">Professional</label> 
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked="true" id="religious" name="category" onChange={this.props.religiousClicked}></input>
                        <label for="religious">Religious</label> 
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked="true" id="food" name="category" onChange={this.props.foodClicked}></input>
                        <label for="food">Food Provided</label> 
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked="true" id="other" name="category" onChange={this.props.otherClicked}></input>
                        <label for="other">Other</label> 
                    </li>
                </ul>      
            </div>
        );
    }
}

export default Filter;