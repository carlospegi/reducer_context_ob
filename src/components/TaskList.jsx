import React, { useContext } from 'react'


import { myContext } from './Task_context';


const TaskList = () => {
    const { Tasks, deleteTask} = useContext(myContext);
    return (
        <div>
                        
            {

                Tasks.map((task, index) => (
                Tasks && 
                        <div key={index}>
                            <p>Task : {task.taskName}</p>
                            <p> Description : {task.description}</p>
                            <button onClick={()=>deleteTask(task.id)} >Delete Task</button>
                      
                      
                        </div>
                
                ))
            
            }
            
    <br/>
            
        </div>
    )
}

export default TaskList
