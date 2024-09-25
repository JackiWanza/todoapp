import React from 'react'
import {Link} from 'react-router-dom'

const TodosList = () => {
    const todos =[
       'An item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'
    ]
  return (
      <div><ul className="list-group">
        {
         todos.map(todo => (
             <li key={todo} className="list-group-item">
              <Link to={`/todos/${todo}`}>
                {todo}
              </Link>
             </li>
         ))   
        }
      </ul></div>
  )
}

export default TodosList