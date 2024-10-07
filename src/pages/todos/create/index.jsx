import React, {useState} from 'react'

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [isLoading, setIsLoading] =useState(false)
    const handleSubmit =(event)=>{
        setIsLoading(true)
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              body: body,
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setTitle('')
                setBody('')
            }).finally(()=> setIsLoading(false))
    }
    return (
        <div className='container mt-3'>
            <form onSubmit={handleSubmit}>
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
                        ):('Submit')
                    }
                </button>
            </form>
        </div>
    )
}

export default Create