import './ToDoItem.styles.scss';
import check from '../../../../assets/icon-check.svg';

export function ToDoItem({todo, handleToggle}) {
    const handleClick = (event) => {
        event.preventDefault();
        handleToggle(event.target.id);
    }
    
    return (
        <li className="todo-item todo-item--dark">
            <input 
                type="checkbox" 
                defaultChecked={todo.isChecked}
                className={"todo-item__checkbox todo-item__checkbox--dark" + (todo.isChecked ? " checked" : "")}
                onClick={handleClick}
                id={todo.timestamp}
            />
            <img src={check} alt="dark-theme" className="todo-item__icon" />
            <span className="todo-item__title">{todo.title}</span>
        </li>
    )
}