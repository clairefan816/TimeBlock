import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <nav id="nav-wrap">

            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#contact">Sign up/ Log in</a></li>
            </ul>
   
         </nav>
        )
    }
}

export default Header;