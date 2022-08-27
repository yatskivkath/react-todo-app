const initialState = [
        {
            id: 0,
            title: "Learn Redux",
            isChecked: false
        },
        {
            id: 1,
            title: "Learn Vue",
            isChecked: false
        },
        {
            id: 2,
            title: "Learn React",
            isChecked: false
        }
]

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case "todos/addTodo": {
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    title: action.payload,
                    completed: false
                }
            ]
        }
        case "todos/deleteTodo": {
            console.log(action)
            return state.filter(todo => todo.id !== action.payload);
        }
        case "todos/toggleTodo" : {
            return state.map(todo => {
                if(todo.id === parseInt(action.payload)) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else return todo
            })
        }
        default:
            return state
    }
}