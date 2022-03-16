import React from 'react'

export const TodoListItem = ({todo, index, handleComplete, handleRemoveTodo}) => {
    return (
        <li
            key={todo.id}
            className='list-item'
        >
            <p onClick={() => handleComplete(todo.id)}
                className={`${todo.done && 'complete'}`}
            >
                {index + 1}. {todo.description}
            </p>
            <button
                onClick={ () => handleRemoveTodo(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}
