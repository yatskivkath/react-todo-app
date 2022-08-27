import './MainView.styles.scss';
import Header from "../../components/layout/Header/Header";
import { ToDoAdd, ToDoList } from '../../components/Main/ToDo';

export default function MainPage() {
    

    return (
        <main className='container main-view main-view--dark'>
            <Header />
            <ToDoAdd />
            <ToDoList/>
        </main>
    )
}