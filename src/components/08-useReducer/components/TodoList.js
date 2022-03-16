import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleComplete, handleRemoveTodo}) => {
    return (
        <ul>
            {
                todos.map( (todo, index) => (
                    <TodoListItem key={index} todo={todo} index={index} handleComplete={handleComplete} handleRemoveTodo={handleRemoveTodo} />
                ))
            }
        </ul>
    )
}
