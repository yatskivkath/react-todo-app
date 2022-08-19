import './ToDoList.styles.scss';

import { ToDoItem } from "../ToDoItem/ToDoItem";

export function ToDoList({todos, toggleTodo}) {
    const handleToggle = (timestamp) => {
        toggleTodo(timestamp)
    }

    return (
        <ul className='todo-list todo-list--dark'>
            {todos.map((todo) => <ToDoItem key={todo.timestamp} todo={todo} handleToggle={handleToggle}/>)}
        </ul>
    )
}