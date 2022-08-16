import './ToDoAdd.styles.scss';
import { useState} from 'react';

export function ToDoAdd({ addTodo }) {

    const [input, setInput] = useState("");

    function handleChange(event) {
        setInput(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault()
        addTodo(input);
        setInput("");
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