import React, {useState, useEffect}from 'react'
import {useParams, useNavigate} from 'react-router-dom'

export const TodoDetails = () => {
  // const {state} = useLocation()
  // const todo=state.todo
  // console.log(state)
  const [todo, setTodo] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

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

  const handleEdit =(event)=>{
    event.preventDefault()
    setisLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts/${todoId}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: todoId,
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .finally(()=>setisLoading(false));
    // console.log("first")

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

  useEffect(() => {
    if (todo) {
     setTitle(todo.title)
     setBody(todo.body) 
    }
  }, [todo])
  
  return (
    todo ? 
    (
      <div className='container'>
        <div className="row">
          <div className="col mt-4">
            <button type="button" className="btn btn-outline-danger me-4" onClick={handleDelete} disabled={isLoading}>Delete Todo</button>
            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
             Edit Todo
            </button>
          
        </div>
        <div className="card mt-4 p-4"> 
          <h1>{todo.title}</h1>
        </div>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className='container mt-3'>
                  <form onSubmit={handleEdit}>
                      <div className="mb-3">
                          <label htmlFor="exampleInputTitle" className="form-label">Title</label>
                          <input type="text" className="form-control" id="exampleInputTitle" value={title} onChange={(event)=>{
                              console.log(event.target.value)
                              setTitle(event.target.value)
                          }}/>
                      </div>
                      <div className="mb-3">
                          <label htmlFor="exampleInputBody" className="form-label">Body</label>
                          <input type="text" className="form-control" id="exampleInputBody" value={body} onChange={(event)=>{
                              console.log(event.target.value)
                              setBody(event.target.value)
                          }}/>
                      </div>
                      <button type="submit" className="btn btn-primary">
                          {
                              isLoading ?(
                                  <div className="spinner-border text-info" role="status">
                                      <span className="visually-hidden">Loading...</span>
                                  </div>
                              ):('Update Todo')
                          }
                      </button>
                  </form>
                </div>
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
