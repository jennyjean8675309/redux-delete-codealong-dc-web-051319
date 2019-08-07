import React from 'react'

const Todo = props => {
    return (
        <div>
            <li>
            <span>{props.todo.text}</span><button onClick={() => props.deleteTodo(props.todo.id)} >Delete</button>
            </li>
        </div>
    )
}

export default Todo;
