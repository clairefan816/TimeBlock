import React from 'react';
import logo from './logo.svg';
import Day from './components/Day/Day'
import Task from './components/Task/Task'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="MainContent">
        <Day />
        <Task />
      </div>
    </div>
  );
}

export default App;
