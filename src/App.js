import logo from './logo.svg';
import React from 'react';
import './App.css';
// import {TaskList} from "../src/imports"
import TaskList from './components/taskList/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List App</h1>
        <img  src={logo} className="react-icon"></img>
      </header>
      <main>
        <TaskList/> 
      </main>
    </div>
  );
}

export default App;
