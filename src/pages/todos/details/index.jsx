import React, {useState, useEffect}from 'react'
import {useParams} from 'react-router-dom'

export const TodoDetails = () => {
  // const {state} = useLocation()
  // const todo=state.todo
  // console.log(state)
  const [todo, setTodo] = useState(null)
  const {todoId}=useParams()
  useEffect(() => {
   fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    .then(response => response.json())
    .then(json => {
      setTodo(json)
    })
  
    return () => {
      
    }
  }, [todoId])
  return (
    todo ? <div className='container'><h1>{todo.title}</h1></div> : <p>loading</p>
  )
}
