import './MainView.styles.scss';
import { useState } from 'react';

import Header from "../../components/layout/Header/Header";
import { ToDoAdd, ToDoList } from '../../components/Main/ToDo';

export default function MainPage() {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo_input) => {
        setTodos(
            [
                ...todos,
                {
                    timestamp: Math.floor(Date.now() / 1000),
                    title: todo_input,
                    isChecked: false
                }
            ]
        )
    }

    const toggleTodo = (todo_timestamp) => {
        if(todos.filter(todo => todo.timestamp === parseInt(todo_timestamp))) {
            setTodos(todos.map(todo => {
                if(todo.timestamp === parseInt(todo_timestamp))
                    return {
                        ...todo,
                        isChecked: !todo.isChecked
                    }
                else return todo
            }))

            console.log(todos);
        }
    }

    return (
        <main className='container main-view main-view--dark'>
            <Header />
            <ToDoAdd addTodo={addTodo} />
            <ToDoList todos={todos} toggleTodo={toggleTodo} />
        </main>
    )
}