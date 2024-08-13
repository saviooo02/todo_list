import React, { useState } from "react";

function Todo(){

    const [tasks,setTasks]=useState(["Wakeup","Brush","Eat"])
    const [newTask,setNewTask] = useState("")

    const handleNewTask = (e)=>{
        setNewTask(e.target.value);
    }

    const addTask = ()=>{
        setTasks([...tasks,newTask])
    }

    const removeTask = (index)=>{
        const updatedTasks = tasks.filter((_,i)=>i !== index)
        setTasks(updatedTasks)
    }

    return(
        <div>
            <input type="text" value={newTask} onChange={handleNewTask} />
            <button onClick={addTask}>Add</button>


           <ol>
            {tasks.map((task,index)=>
                <li key={index}>{task}<button onClick={()=>removeTask(index)}>Delete</button></li>
            )}
           </ol>
        </div>
    )
}

export default Todo;