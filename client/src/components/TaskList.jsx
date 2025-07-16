import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem';
import { getTasks } from '../apis/api';
 
const dummyTasks = [
  { id: 1, title: "Sample Task 1", description: "Description for Task 1", status: "pending" },
  { id: 2, title: "Sample Task 2", description: "Description for Task 2", status: "completed" },
  { id: 3, title: "Sample Task 3", description: "Description for Task 3", status: "pending" },
  { id: 4, title: "Sample Task 4", description: "Description for Task 4", status: "completed" },
];

// const dummyTasks = [

// ];

const TaskList = ({onEdit,  status = "", refresh}) => {
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
        tasks.map((task) => <TaskItem key={task._id} task={task} onEdit={onEdit} />)
      )}
    </div>
  )
}

export default TaskList