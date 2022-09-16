import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();//by this on=ve rpage is not reloaded again and again
if(!title ||!desc){
    alert("Title or description cant be blank");
}
      addTodo(title,desc)
    }
    return (
        <div className="cantainer my-3">
            <h3>Add a todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlfor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}
                    className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlfor="desc" className="form-label">Todo Description</label>
                    <input type="text"value={desc} onChange={(e)=>{setDesc(e.target.value)}}
                    className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-sucess ">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
