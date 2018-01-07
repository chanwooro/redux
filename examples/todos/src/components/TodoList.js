import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => ( //This is basically act as constructor
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}//means nothing
        {...todo} // this expands whatever inside todo. In this case, it contains "Completed" and "text variables.
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = { //Must define required variables and its type for constructor
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
