import './ToDoItem.styles.scss';
import check from '../../../../assets/icon-check.svg';
import cross from '../../../../assets/icon-cross.svg';

export function ToDoItem({todo, handleToggle}) {
    const handleCheckClick = (event) => {
        event.preventDefault();
        handleToggle(event.target.id);
    }
    
    return (
        <li className="todo-item todo-item--dark">
            <div className='todo-item__check--container' >
                <input 
                    type="checkbox" 
                    defaultChecked={todo.isChecked}
                    className={"todo-item__checkbox todo-item__checkbox--dark" + (todo.isChecked ? " checked" : "")}
                    id={todo.timestamp}
                    onClick={handleCheckClick}
                    
                />
                <img 
                    src={check} 
                    alt="dark-theme" 
                    className={"todo-item__check" + (!todo.isChecked ? "--none" : "")}
                />
            </div>
            <span className={"todo-item__title --dark" + (todo.isChecked ? " todo-item__title--crossed" : "")}>{todo.title}</span>
            <div className='todo-item__cross--container'>
                <img src={cross} alt="dark-theme" className="todo-item__cross" />
            </div>
        </li>
    )
}