import './MainView.styles.scss';
import { useSelector, useDispatch } from 'react-redux';

import Header from "../../components/layout/Header/Header";
import { ToDoAdd, ToDoList } from '../../components/Main/ToDo';

export default function MainPage() {

    const todos = useSelector(state => state.todos.value)
    const dispatch = useDispatch()

    const addTodo = (todo_input) => {
        dispatch(addTodo({
            timestamp: Math.floor(Date.now() / 1000),
            title: todo_input,
            isChecked: false
        }))
    }

    const toggleTodo = (todo_timestamp) => {
        dispatch(toggleTodo(todo_timestamp))
    }

    return (
        <main className='container main-view main-view--dark'>
            <Header />
            <ToDoAdd addTodo={addTodo} />
            <ToDoList todos={todos} toggleTodo={toggleTodo} />
        </main>
    )
}