import React from 'react'

const Todos = () => {
    const todos=[
       'An item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'
    ]
  return (
      <div><ul className="list-group">
        {
         todos.map(todo => (
             <li key={todo} className="list-group-item">{todo}</li>
         ))   
        }
      </ul></div>
  )
}

export default Todos