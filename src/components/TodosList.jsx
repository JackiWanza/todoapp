import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const TodosList = ({todos}) => {
  TodosList.propTypes={
    todos:PropTypes.array
  }
    
  return (
      <div><ul className="list-group">
        {
         todos.map(todo => (
             <li key={todo.id} className="list-group-item">
              <Link to={`/todos/${todo.id}`} state={{todo}}>
                {todo.title}
              </Link>
             </li>
         ))   
        }
      </ul></div>
  )
}

export default TodosList