import mockTasks from './data/mockTasks.json'
import TaskList from './components/TaskList'
function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskList tasks={mockTasks} />
    </div>
  )
}

export default App
