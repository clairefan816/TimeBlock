import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { AppContext } from "./libs/contextLib";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import './App.css'
import DayContainer from './containers/DayContainer'
import TaskContainer from './containers/TaskContainer'
import Manual from './components/Manual/Manual'
import Landing from './components/Landing/Landing'
import Login from './containers/Login'
import Signup from "./containers/Signup";
import NotFound from "./containers/NotFound"


function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const history = useHistory();

  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
    history.push("/login");
  }
  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Router>
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
                    {isAuthenticated ? (
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    ) : (
                    <>
                        <LinkContainer to="/signup">
                        <Nav.Link>Signup</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                        <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </>
                    )}
                </Nav>

                </Navbar.Collapse>
                </Navbar>
            </div>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/landing' component={Landing} />
            <Route exact path='/time' render={()=>{return <div className="MainContent"><DayContainer /><TaskContainer /></div>}}/>
            <Route exact path='/manual' component={Manual} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
