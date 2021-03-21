import React from 'react';
import logo from './logo.svg';
import DayContainer from './containers/DayContainer'
import TaskContainer from './containers/TaskContainer'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="MainContent">
        <DayContainer />
        <TaskContainer />
      </div>
    </div>
  );
}

export default App;
