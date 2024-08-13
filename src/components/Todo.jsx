import React, { useState } from "react";

function Todo(){

    const [tasks,setTasks]=useState([{text:"Wakeup",completed:false},
                                    {text:"Brush",completed:false},
                                    {text:"Eat",completed:false}])

    const [newTask,setNewTask] = useState("")

    const handleNewTask = (e)=>{
        setNewTask(e.target.value);
    }

    const addTask = ()=>{
        setTasks([...tasks,{text:newTask,completed:false}])
        setNewTask("")
    }

    const removeTask = (index)=>{
        const updatedTasks = tasks.filter((_,i)=>i !== index)
        setTasks(updatedTasks)
    }

    const doneTask = (index) => {
        const updatedTask = tasks.map((task, i) => {
          if (i === index) {
            return { ...task, completed: true }; // Create a new object with completed set to true
          }
          return task; // Return the original task if it's not the one being marked as done
        });

    setTasks(updatedTask)
}

    return(
        <div>
            <input type="text" value={newTask} onChange={handleNewTask} />
            <button onClick={addTask}>Add</button>


           <ol>
            {tasks.map((task,index)=>
                <li key={index} style={{textDecoration : task.completed ? "line-through" : "none"}}>{task.text}<button onClick={()=>doneTask(index)}>Done</button><button onClick={()=>removeTask(index)}>Delete</button></li>
            )}
           </ol>
        </div>
    )
}

export default Todo;