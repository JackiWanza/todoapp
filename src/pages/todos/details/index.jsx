import React from 'react'
import {useLocation} from 'react-router-dom'

export const TodoDetails = () => {
    const {state} = useLocation()
    console.log(state)
  return (
    <div className='container'><h1>{state}</h1></div>
  )
}
