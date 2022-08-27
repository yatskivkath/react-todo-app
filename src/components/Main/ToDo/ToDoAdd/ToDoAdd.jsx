import { useDispatch } from 'react-redux'
import { useState} from 'react'

import './ToDoAdd.styles.scss'

export function ToDoAdd() {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    function handleChange(event) {
        setInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        dispatch({
            type: "todos/addTodo",
            payload: input
        });
        setInput("")
    }

    return (
        <div className="todo-add">
            <form onSubmit={handleSubmit} >
                <input 
                    type="text" 
                    placeholder="Create a new todo…" 
                    className="todo-add__input todo-add__input--dark"
                    onChange={handleChange}
                    value={input}
                />
            </form>
        </div>
    )
}