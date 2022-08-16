import './ToDoItem.styles.scss';

export function ToDoItem({title, isChecked}) {
    return (
        <li className="todo-item todo-item--dark">
            <input 
                type="checkbox" 
                checked={isChecked}
                className="todo-item__checkbox todo-item__checkbox--dark"
            />
            <span className="todo-item__title">{title}</span>
        </li>
    )
}