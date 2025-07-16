import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTask } from '../apis/api'

const TaskDetails = () => {
  const { id } = useParams()
  const [task, setTask] = useState(null)

  useEffect(() => {
    const fetchTask = async () => {
      const data = await getTask(id)
      setTask(data)
    }
    fetchTask()
  }, [id])

  if (!task) return <div className="text-center mt-10">Loading...</div>

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
      <p className="text-gray-700 mb-2"><strong>Description:</strong> {task.description}</p>
      <p className="text-gray-700 mb-2"><strong>Status:</strong> {task.status}</p>
      <p className="text-sm text-gray-500 mt-2"><strong>Created:</strong> {new Date(task.createdAt).toLocaleString()}</p>
    </div>
  )
}

export default TaskDetails