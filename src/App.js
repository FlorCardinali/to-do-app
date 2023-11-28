import logo from './logo.svg';
import React from 'react';
import './App.css';
import {TaskList,TaskForm} from "../src/imports"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List App</h1>
        <img  src={logo} className="react-icon"></img>
      </header>
      <div className='container'>
        <aside>
          <TaskForm/>
        </aside>
        
        <main>
          <TaskList/> 
        </main>
      </div>
      
    </div>
  );
}

export default App;
