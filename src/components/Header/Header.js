import React, {Component} from 'react';
import './Header.css';
import Navbar from "react-bootstrap/Navbar";
// import NavLink from "react-bootstrap/NavLink";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

class Header extends Component {
    render(){
        return(
            <div className="Header">
                <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
                <LinkContainer to="/">
                <Navbar.Brand className="font-weight-bold text-muted">
                    Time Journal
                </Navbar.Brand>
                </LinkContainer>
                <LinkContainer to="/time">
                <Navbar.Brand className="font-weight-bold text-muted">
                    Calendar
                </Navbar.Brand>
                </LinkContainer>
                <LinkContainer to="/manual">
                <Navbar.Brand className="font-weight-bold text-muted">
                    Manual
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav activeKey={window.location.pathname}>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>

                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;