import React, {useEffect, useState} from'react'
import TodosList from '../../components/TodosList'

const Todos = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => {
      setTodos(json)
    })
  
    return () => {
      
    }
  }, [])
  return (
    <div><TodosList todos={todos}/></div>
  )
}

export default Todos