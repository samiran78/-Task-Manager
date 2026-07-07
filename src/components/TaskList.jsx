import TaskItem from "./TaskItem";
function TaskList({ tasks,deleteTask }) {
    return (
        <div className="task-list">
            {tasks.map((task)=>{
                return <TaskItem key={task.id} task={task} deleteTask={deleteTask}/>
            })}
        </div>
    )
}
export default TaskList;