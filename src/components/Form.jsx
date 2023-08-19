import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/TodoContext';
import { savetodo, updatetodo } from '../context/TodoAction';

const Form = () => {
    const {dispatch, edit} = useContext(TodoContext);
    const[text, setText] = useState("")

    const handlesubmit =(e)=>{
        e.preventDefault();
        if(edit.isedit){
         const datad=   updatetodo(edit.todo.id, text);
      dispatch({
          type:"UPDATE_TODO",
          payload:datad,
      })
        }
        else{
            const data = savetodo(text);
              dispatch({
              type:"SAVE_TODO",
              payload:data,
      });
  }
        
        setText("")
    }
    useEffect(()=>{
        setText(edit.todo.text)
    },[edit]);
  return (
    <div className="card mt-4">
      <form action="" className=' rounded-0 mt-4' onSubmit={handlesubmit}>
        <input value={text} type="text" placeholder='enter text' className='  p-1 rounded-0 ' onChange={(e)=>setText(e.target.value)}/>
        <button className='btn btn-success rounded-0 mt-2 ms-2 mb-2'>Save</button>
      </form>
      </div>
  )
}

export default Form;
