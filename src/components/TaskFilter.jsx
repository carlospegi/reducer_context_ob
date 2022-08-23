import React, { useContext, useState } from 'react'
import { myContext } from './Task_context'

const TaskFilter = () => {
    const { Tasks} = useContext(myContext);
    const [idTask, setIdTask] = useState('');

console.log(Tasks);

const handleChange = (e)=>{
    setIdTask(e.target.value)
}

  return (
      <div>
  <br/>
      <input type="text" placeholder='
Search task by name' onChange={handleChange}></input>
      {
        Tasks.find(task=> task.taskName === idTask) ? "-  FOUND !!!" : "NOT FOUND"
      }
    </div>
  )
}

export default TaskFilter
