import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container p-4'>
         <Todos></Todos>
      </div>
    
    </div>
  );
  
}
export default App;
