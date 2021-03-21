import React, {Component} from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom'

class Header extends Component {
    render(){
        return(
        <div className="Header">
            <NavLink to='/login'>Landing Page   </NavLink>
            <NavLink to='/time'>Calendar Page   </NavLink>
            <NavLink to='/manual'>Manual Page   </NavLink>
        </div>
        )
    }
}

export default Header;