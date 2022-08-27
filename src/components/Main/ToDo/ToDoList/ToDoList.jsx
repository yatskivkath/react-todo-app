import { useSelector } from 'react-redux'

import './ToDoList.styles.scss';
import { ToDoItem } from "../ToDoItem/ToDoItem";

export function ToDoList() {   
    const todos = useSelector(state => state.todos)
    return (
        <div className='todo-list  --dark'>
            <ul className='todo-list__list'>
                {todos.map((todo) => <ToDoItem key={todo.id} todo={todo}/>)}
            </ul>
            <div className="todo-list__nav--container">
                <span>5 items left</span>
                <nav className='todo-list__nav'>
                    <button className="todo-list__button todo-list__button--active">All</button>
                    <button className="todo-list__button">Active</button>
                    <button className="todo-list__button">Completed</button>
                </nav>
                <button className="todo-list__button-clear">Clear Completed</button>
            </div>
        </div>
    )
}