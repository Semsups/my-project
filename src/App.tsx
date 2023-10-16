import './App.css';
import Todolist from './Todolist';
import React from 'react';

export type filterValue = 'all' | 'active' | 'complete'

function App() {
  let [tasks, setTasks] = useState( [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false }
])

const deleteTask = (id: number) => {
  let filteredTask = tasks.filter(el => el.id != id)
  setTasks(filteredTask)
}

let [filter, setFilter] = useState('all')

let filteredTask = tasks

if (filter === 'active') {
    filteredTask = tasks.filter(el => el.isDone === false)
}

if (filter === 'complete') {
  filteredTask = tasks.filter(el => el.isDone === true)
}

const changeFilter = (value: filterValue) => {
      setFilter(value)
}

  return (
      <div className='App'>
          <Todolist title = "Время знаний" 
                    tasks = {filteredTask}
                    deleteTask = {deleteTask}
                    changeFilter = {changeFilter}/>
      </div>
  )
}

export default App;
