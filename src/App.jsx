import mockTasks from './data/mockTasks.json'
import TaskList from './components/TaskList'
import { useState } from 'react';
import TaskForm from './components/TaskForm';
function App() {
  //for updating tasks to rendering it through react, we need to use state and setState. But for now, we will just use mock data to render the tasks.
  const [tasks, setTasks] = useState(mockTasks);
  //add tasks.
  function addTask(newTask){
    //creates one new array containing everything — that single array is what gets passed to setTasks.
    setTasks([...tasks,newTask]);
  }
  return (
    <div>
      <h1>Task Manager</h1>
       <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div> 
  )
}

export default App


//note:-> tasks = current snapshot of data (read-only, in the JSX). setTasks = the only legal door through which that snapshot can change.