import './MainView.styles.scss';
import { useState } from 'react';

import Header from "../../components/layout/Header/Header";
import { ToDoAdd, ToDoList } from '../../components/Main/ToDo';

export default function MainPage() {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo_input) => {
        console.log(todo_input)
        setTodos(
            [
                ...todos,
                {
                    timestamp: Math.floor(Date.now() / 1000),
                    title: todo_input,
                    isChacked: false
                }
            ]
        )
    }

    return (
        <main className='container main-view main-view--dark'>
            <Header />
            <ToDoAdd addTodo={addTodo} />
            <ToDoList todos={todos} />
        </main>
    )
}