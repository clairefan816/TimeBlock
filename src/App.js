import React from 'react';
import logo from './logo.svg';
import DayContainer from './containers/DayContainer'
import TaskContainer from './containers/TaskContainer'
import Header from './components/Header/Header'
import Manual from './components/Manual/Manual'
import './App.css'
import Landing from './components/Landing/Landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (

      <Router>
          <Header />
          <switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Landing} />
            <Route exact path='/time' render={()=>{return <div className="MainContent"><DayContainer /><TaskContainer /></div>}}/>
            <Route exact path='/manual' component={Manual} />
            {/* <Route render={() => <h1>Not found!</h1>} /> */}
          </switch>
      </Router>

  );
}

export default App;
