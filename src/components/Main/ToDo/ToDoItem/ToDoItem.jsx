import { useDispatch } from 'react-redux'

import './ToDoItem.styles.scss'
import check from '../../../../assets/icon-check.svg'
import cross from '../../../../assets/icon-cross.svg'

export function ToDoItem({todo}) {
    const dispatch = useDispatch()

    const handleToggle = (event) => {
        event.preventDefault()
        dispatch({
            type: "todos/toggleTodo",
            payload: todo.id
        })
    }

    const handleDelete = (event) => {
        event.preventDefault()
        dispatch({
            type: "todos/deleteTodo",
            payload: todo.id
        })
    }
    
    return (
        <li className="todo-item todo-item--dark">
            <div className='todo-item__check--container' >
                <input 
                    type="checkbox" 
                    defaultChecked={todo.completed}
                    className={"todo-item__checkbox todo-item__checkbox--dark" + (todo.completed ? " checked" : "")}
                    onClick={handleToggle}
                    
                />
                <img 
                    src={check} 
                    alt="dark-theme" 
                    className={"todo-item__check" + (!todo.completed ? "--none" : "")}
                />
            </div>
            <span className={"todo-item__title --dark" + (todo.completed ? " todo-item__title--crossed" : "")}>
                {todo.title}
            </span>
            <button className='todo-item__cross--container' onClick={handleDelete}>
                <img 
                    src={cross} 
                    alt="dark-theme" 
                    className="todo-item__cross" 
                />
            </button>
        </li>
    )
}