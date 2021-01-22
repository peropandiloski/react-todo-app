import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, markTodo, deleteTodo }) => {
    const allTodos = todos.map((element, index) => {
        return (
            <Todo todo={element} key={element.id} index={index} markTodo={markTodo} deleteTodo={deleteTodo} />
        )
    })
    return (
        <div className="container">
            <div className="row">
                {allTodos}
            </div>

        </div>
    )
}

export default TodoList