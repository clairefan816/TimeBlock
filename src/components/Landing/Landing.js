import React, {Component} from 'react';
import './Landing.css';

class Landing extends Component {
    render(){
        return(
        <div className="LandingPage">
            <h1>Time Journal</h1>
            <p className="text-muted">
                A time management app that targets someone who wants to arrange their time more efficiently. 
            </p>
        </div>
        )
    }
}

export default Landing;