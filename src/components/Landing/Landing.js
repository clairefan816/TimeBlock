import React, {Component} from 'react';
import './Landing.css';

class Landing extends Component {
    render(){
        return(
        <div className="LandingPage">
            <h1>Welcome to Time Journal!</h1>
            <div>
                This is a time management app that targets someone who wants to arrange their time more efficiently. 
            </div>
            <div>
                The core functionality of the app is for user to mark their day by the categories.
            </div>
        </div>
        )
    }
}

export default Landing;