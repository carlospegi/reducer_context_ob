import './App.css';
import Task_context from './components/Task_context';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';

function App() {
  return (
    <div className="App">
    <Task_context>

<TaskList/>
<TaskForm/>
<TaskFilter/>

    </Task_context>
    </div>
  );
}

export default App;
