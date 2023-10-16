import React from 'react';
import { filterValue } from './App';

type propsTodolistType = {
    title: string
    tasks: Array<tasksType>
    deleteTask: (id:number) => void
    changeFilter: (value: filterValue) => void
}

type tasksType = {
    id: number
    title: string
    isDone: boolean
}

const Todolist = (props: propsTodolistType) => {
    
    return (<div>
              <h3>{props.title}</h3>
              <div>
                  <input/>
                  <button>+</button>
              </div>
              <ul>
                {props.tasks.map((el)=> {
                    return(
                    <li key={el.id}>
                        <input type='checkbox' checked={el.isDone}/> 
                        <span>{el.title}</span>
                        <button onClick={props.deleteTask(el.id)}>x</button>
                    </li>)})}
              </ul>
              <div>
                  <button onClick={props.changeFilter('all')}>All</button>
                  <button onClick={props.changeFilter('active')}>Active</button>
                  <button onClick={props.changeFilter('complete')}>Completed</button>
              </div>
          </div>)

}

export default Todolist;