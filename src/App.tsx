import React from 'react';
import logo from './logo.svg';
import './App.css';
import todolist from './Todolist';
import Todolist from './Todolist';

function App() {
  const tasks1 = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false }
]
  const tasks2 = [
    { id: 1, title: "Hello world", isDone: false },
    { id: 2, title: "I am Happy", isDone: false },
    { id: 3, title: "Yo", isDone: false }
]
  return (
      <div className='App'>
          <Todolist title = "Время знаний" tasks = {tasks1}/>
          <Todolist title = "Время обучения" tasks = {tasks2}/>
      </div>
  )
}

export default App;
