// NOTE:->
// controlled inputs. In React, form inputs are usually "controlled" — meaning their value comes from state, and 
// every keystroke updates that state via onChange. 

import { useState } from "react";

// This is different from plain HTML forms where the DOM just holds the value itself.
function TaskForm({ addTask }) {
    const [task, setTask] = useState({
        title: '',
        description: '',
        priority: 'Medium', //by-default priority is medium.
        dueDate: '',
        status: 'Pending',  //by-default status is pending.
    })
    //changing function
    function handleChange(e) {
        const {name,value} = e.target;
        setTask((prevtask)=>({
            ...prevtask,
            [name]:value
        }));
    }
    //submit function is handled in the button itself, so that we can reset the form after submission.
    function handleSubmit(e) {
  e.preventDefault()
  if(!task.title.trim()) return; //if title is empty, do not submit.
  addTask(task)
  setTask({
    title: '',
    description: '',
    priority: 'Medium',
    dueDate: '',
    status: 'Pending',
  })
}
return(
    <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Task title" value={task.title} onChange={handleChange}/>
        <input type="text" name="description" placeholder="Task description" value={task.description} onChange={handleChange}/>
        <select name="priority" value={task.priority} onChange={handleChange}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
        <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange}/>
        <select name="status" value={task.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
        </select>
       <button type="submit">Add Task</button>
    </form>
)
}

export default TaskForm;

// note:-> So the flow is: typing → onChange updates local task state → submit → onSubmit fires → calls addTask(task) → 
// App's addTask calls setTasks → re-render with new task visible.
// For Edit/Delete/Mark-complete (after), the pattern is similar: buttons use onClick, which call functions passed down from App, 
// which internally call setTasks.