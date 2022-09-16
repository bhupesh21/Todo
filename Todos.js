import React from 'react'
import Todoitem from "./Todoitem";

const Todos = (props) => {
  
    let myStyle={
      minHeight:"70vh",
      margin: "40px auto"
    }
    return(
    <div className= "cantainer my-3" style={myStyle}>
      <h3 className=" my-3">Todo list</h3>
      {props.todos.length===0 ? "No todos to display":
    props.todos.map((todo)=>{
              return(
                <>
               <Todoitem todo={todo}key={todo.sno} onDelete={props.onDelete}/><hr/>
               </>
              )
      })
    }
    

   
      
    </div>
  )
}

export default Todos
