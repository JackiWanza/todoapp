import React, {useState, useEffect}from 'react'
import {useParams, useNavigate} from 'react-router-dom'

export const TodoDetails = () => {
  // const {state} = useLocation()
  // const todo=state.todo
  // console.log(state)
  const [todo, setTodo] = useState(null)
  const [isLoading, setisLoading] = useState(false)

  const {todoId}=useParams()
  const navigate=useNavigate()

  const handleDelete =()=>{
    setisLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts/${todoId}`, {
      method: 'DELETE',
    }).then(()=>{
      navigate("/")
    }).finally(()=>setisLoading(false))
  }

  const handleEdit =()=>{

  }

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
    todo ? 
    (
      <div className='container'>
        <div className="row">
          <div className="column">
            <button type="button" className="btn btn-outline-danger mr-4" onClick={handleDelete} disabled={isLoading}>Delete Todo</button>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
             Edit Todo
            </button>
          
        </div>
        <h1>{todo.title}</h1>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={handleEdit}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    ) 
    : 
    (
      <div className="d-flex justify-content-center mt-4">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  )
}
