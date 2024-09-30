import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Todos from './pages/todos';
import { TodoDetails } from './pages/todos/details';
import Create from './pages/todos/create';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Todos></Todos>}/>
        <Route path='/todos/:todoId' element={<TodoDetails></TodoDetails>}/>
        <Route path='/create' element={<Create></Create>}/>
      </Routes>
    </div>
  );
  
}
export default App;
