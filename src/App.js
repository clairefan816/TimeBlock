import React, { useEffect, useState } from "react";
import moment from 'moment'
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { AppContext, useAppContext } from "./libs/contextLib";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import './App.css'
import Calendar from './containers/Calendar'
import Report from './components/Report/Report'
import Landing from './components/Landing/Landing'
import Login from './containers/Login'
import Signup from "./containers/Signup";
import NotFound from "./containers/NotFound"


function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [curUser, setCurUser] = useState(null);
  const [curDate, setCurDate] = useState(moment());
  const history = useHistory();

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    console.log(curDate);
    console.log(setCurDate);
    console.log(userHasAuthenticated);
  }

  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
    setCurUser(null);
    history.push("/login");
  }
  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated, curUser, setCurUser, curDate, setCurDate }}>
      <Router>
      <div className="Header">
                <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
                <LinkContainer to="/">
                <Navbar.Brand className="font-weight-bold text-muted">
                    Time Journal
                </Navbar.Brand>
                </LinkContainer>
                {isAuthenticated ? (
                    <LinkContainer to="/time">
                    <Navbar.Brand className="font-weight-bold text-muted">
                        Calendar
                    </Navbar.Brand>
                    </LinkContainer>
                    ) : (
                    <>
                    </>
                    )}
                <LinkContainer to="/Report">
                <Navbar.Brand className="font-weight-bold text-muted">
                    Report
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
            <Route exact path='/time' component={Calendar}/>
            <Route exact path='/Report' component={Report} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
