import './ToDoList.styles.scss';

import { ToDoItem } from "../ToDoItem/ToDoItem";

export function ToDoList({todos}) {
    return (
        <ul className='todo-list todo-list--dark'>
            {todos.map((todo) => <ToDoItem key={todo.timestamp} title={todo.title} isChecked={todo.isChecked}/>)}
        </ul>
    )
}