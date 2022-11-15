import { useSelector, useDispatch, useStore } from 'react-redux'
import watch from 'redux-watch'
import { useState } from 'react';

import './ToDoList.styles.scss';
import { ToDoItem } from "../ToDoItem/ToDoItem";


export function ToDoList() {   

    const theme = useSelector(state => state.theme)
    
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const store = useStore()

    const [todosShown, setTodosShown] = useState(todos)
    const [view, setView] = useState("all")

    let w = watch(store.getState)
    store.subscribe(w((newVal) => {
        setTodosShown(newVal.todos.filter(todo => {
            switch (view) {
                case "active":
                    return !todo.completed
                case "completed":
                    return todo.completed
                default:
                    return true
            }
        }))
    }))

    const hadleDeleteCompleted = (event) => {
        event.preventDefault()
        dispatch({
            type: "todos/deleteCompleted"
        })
    }

    const handleClickAll = (event) => {
        event.preventDefault()
        setTodosShown(todos)
        setView("all")
    }

    const handleClickActive = (event) => {
        event.preventDefault()
        setTodosShown(todos.filter(todo => !todo.completed))
        setView("active")
    }

    const handleClickCompleted = (event) => {
        event.preventDefault()
        setTodosShown(todos.filter(todo => todo.completed))
        setView("completed")
    }

    return (
        <div className={'todo-list--' + theme}>
            <ul className='todo-list__list'>
                {todosShown.map((todo) => <ToDoItem key={todo.id} todo={todo}/>)}
            </ul>
            <div className="todo-list__nav--container">
                <span>{todos.reduce((prev, cur) => prev + (cur.completed ? 0 : 1), 0)} items left</span>
                <nav className='todo-list__nav'>
                    <button 
                        className={"todo-list__button" + (view === "all" ? " --active" : "")} 
                        onClick={handleClickAll}
                    >All</button>
                    <button 
                        className={"todo-list__button" + (view === "active" ? " --active" : "")} 
                        onClick={handleClickActive}
                    >Active</button>
                    <button 
                        className={"todo-list__button" + (view === "completed" ? " --active" : "")} 
                        onClick={handleClickCompleted}
                    >Completed</button>
                </nav>
                <button className="todo-list__button-clear" onClick={hadleDeleteCompleted} >Clear Completed</button>
            </div>
        </div>
    )
}