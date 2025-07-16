import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem';
import { getTasks } from '../apis/api';
 
const TaskList = ({onEdit,  status = "", refresh ,  onStatusChange}) => {
   const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks(status)
        setTasks(data)
      } catch (error) {
        console.error("Error fetching tasks:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTasks()
  }, [status , refresh])

  if (loading) {
    return (
      <div className="text-center text-gray-500 p-8 bg-white rounded shadow">
        <p className="text-lg">Loading tasks...</p>
      </div>
    )
  }

  return (
   <div className="space-y-4">
      {tasks.length === 0 ? (
        <div className="text-center text-gray-500 p-8 bg-white rounded shadow">
          <p className="text-lg">No tasks found.</p>
          <p className="text-sm">Click "Add Task" to create your first one!</p>
        </div>
      ) : (
        tasks.map((task) => <TaskItem
         key={task._id} task={task} onEdit={onEdit} onStatusChange={onStatusChange}
           onDelete={() => setTasks(prev => prev.filter(t => t._id !== task._id))}
        />)
      )}
    </div>
  )
}

export default TaskList