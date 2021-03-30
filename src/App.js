import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import DayContainer from './containers/DayContainer'
import TaskContainer from './containers/TaskContainer'
import Header from './components/Header/Header'
import Manual from './components/Manual/Manual'
import Landing from './components/Landing/Landing'
import Login from './containers/Login'
// import Signup from "./containers/Signup";
import NotFound from "./containers/NotFound"


function App() {
  return (

    
      <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/landing' component={Landing} />
            <Route exact path='/time' render={()=>{return <div className="MainContent"><DayContainer /><TaskContainer /></div>}}/>
            <Route exact path='/manual' component={Manual} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/signup" component={Signup} /> */}
            <Route component={NotFound} />
          </Switch>
      </Router>

  );
}

export default App;
