import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title.trim()) {
      alert("Task title is required.");
      return;
    }

    onAddTask(task);

    setTask({
      title: "",
      description: "",
      priority: "Medium",
      dueDate: "",
      status: "Pending",
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add Task</h2>

      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
      />

      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
      />

      <select
        name="status"
        value={task.status}
        onChange={handleChange}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;