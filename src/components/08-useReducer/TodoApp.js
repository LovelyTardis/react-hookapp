import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import './TodoApp.css';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';


const init = () => {

    return JSON.parse(localStorage.getItem('todo-list')) || [];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todo-list', JSON.stringify(todos));
    }, [todos])

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: "add",
            payload: newTodo
        })
    }

    const handleRemoveTodo = (todoId) => {
        const removeTodo = {
            type: 'remove',
            payload: todoId,
        };

        dispatch(removeTodo);
    };

    const handleComplete = (todoId) => {
        dispatch({
            type: 'completed',
            payload: todoId
        });
    };

    return (
        <div>
            <h1>TodoApp ( {todos.length} )</h1>
            <hr />
            <div className='grid'>
                <div id='todo-list'>
                    <TodoList
                        todos={todos}
                        handleComplete={handleComplete}
                        handleRemoveTodo={handleRemoveTodo}
                    />
                </div>
                <div id='todo-title'>
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}
