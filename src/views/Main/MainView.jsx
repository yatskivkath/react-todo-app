import { useSelector } from 'react-redux';

import './MainView.styles.scss';
import Header from "../../components/layout/Header/Header";
import { ToDoAdd, ToDoList } from '../../components/Main/ToDo';

export default function MainPage() {
    const theme = useSelector(state => state.theme)
    
    return (
        <main className={'container main-view main-view--' + theme}>
            <Header />
            <ToDoAdd />
            <ToDoList />
        </main>
    )
}