import React, { useContext, useState } from 'react'
import { myContext } from './Task_context';

const TaskForm = () => {
    const {addTask} = useContext(myContext);

const [task, setTask] = useState(
    {
taskName: '',
description:''
    }
);

const handleChange = (e)=>{
    setTask({...task, [e.target.name] : e.target.value })
}

const handleSubmit = (e) =>{
    e.preventDefault()
    addTask(task)
    
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='taskName' placeholder='TaskName' onChange={handleChange} type='text'></input>
        <input name='description' placeholder='Description' onChange={handleChange} type='text'></input>
        <button>ADD TASK</button>
      </form>
    </div>
  )
}

export default TaskForm
