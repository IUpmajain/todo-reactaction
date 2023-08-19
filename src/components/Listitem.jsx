import React, { useContext } from 'react'
import {FaTrashAlt, FaPen} from 'react-icons/fa'
import TodoContext from '../context/TodoContext'
import { deletetodo,edittodo } from '../context/TodoAction'

const Listitem = ({todo}) => {
    const {dispatch}= useContext(TodoContext);

    const handledelete = (id)=>{
      const data = deletetodo(id);
      dispatch({
        type: "DELETE_TODO",
        payload: id,
    });
    };

    const handleedit = (todo)=>{
      const newdata = edittodo(todo);
      dispatch({
          type:"EDIT_TODO",
          payload:todo,
      });
    };
  return (
    <li className="list-group-item rounded-0 ">{todo.text}
    <button className='bg-transparent border-0 float-end '>
        <FaPen className='me-2 mb-1 fs-4 text-dark border-bottom border-dark border-2' onClick={()=>handleedit(todo)} />
    <FaTrashAlt className='float-end fs-4 text-danger' onClick={()=>handledelete(todo.id)}/>
    </button>
    </li>
  )
}

export default Listitem;
