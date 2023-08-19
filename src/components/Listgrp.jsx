import React, { useContext } from 'react'
import Listitem from './Listitem'
import TodoContext from '../context/TodoContext'

const Listgrp = () => {
    const {todos} = useContext(TodoContext);
  return (
    <ul className="list-group mt-3">
    {
        todos.map((todo)=> <Listitem key={todo.id} todo={todo} />)
    }
      </ul>
  )
}

export default Listgrp;
