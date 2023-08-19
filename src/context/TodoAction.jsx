//delete todo
export const deletetodo = (id)=>{
    return (id);
};

//savetodo
export const savetodo = (text)=>{
    const  newtodo ={
        id:crypto.randomUUID(),
        text:text,
    };
    return newtodo;
};

//edittodo
export const edittodo = (todo)=>{
    return(todo);
};

//updatetodo
 export const updatetodo = (id, newtext)=>{
    const update = {
        id:id,
        text:newtext,
    };
    return update;
};