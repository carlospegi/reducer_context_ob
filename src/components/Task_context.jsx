import React, { createContext, useReducer } from 'react'
const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'


const initialState = {
    Tasks: [
      
    ]
}
export const myContext = createContext(initialState)

const Task_context = ({children}) => {



    const reducer = (state, action) => {

        switch (action.type) {
            case ADD_TASK: return {Tasks : [...state.Tasks, action.payload  ]}

            case DELETE_TASK: return {
                Tasks : state.Tasks.filter(task => task.id !== action.payload)
            }
          
    
    default:
return state
}

}

const [state, dispatch] = useReducer(reducer, initialState) 


const addTask = (task) =>{
dispatch({
    type: 'ADD_TASK',
    payload:{...task, }
})
}
const deleteTask = (id) =>{
dispatch({
    type: 'DELETE_TASK',
    payload: id
})
}

return (
    <myContext.Provider value={{...state, addTask, deleteTask}}>

{children}
    </myContext.Provider>
)
}

export default Task_context
