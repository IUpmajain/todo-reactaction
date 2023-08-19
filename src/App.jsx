import React from 'react'
import Navbar from './components/Navbar';
import Form from './components/Form';
import Listgrp from './components/Listgrp';
import { TodoProvider } from './context/TodoContext';

const App = () => {
  return (
    <TodoProvider>
    <Navbar />
    <div className='container'>
      <Form />
      <Listgrp />
    </div>
    </TodoProvider>
  )
}

export default App;
