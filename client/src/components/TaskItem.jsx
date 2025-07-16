import React from 'react'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const TaskItem = ({ task, onEdit , onDelete }) => {
    const navigate = useNavigate()
     const handleDelete = async () => {
  const confirmed = window.confirm("Are you sure you want to delete this task?")
  if (!confirmed) return

  try {
    await deleteTask(task._id)
    toast.success("Task deleted successfully")
    onDelete?.()
  } catch (error) {
    toast.error("Failed to delete task")
  }
}
 
  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-start gap-4">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={task.status === "completed"}
          readOnly
          className="mt-1"
        />
        <div>
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-600">{task.description}</p>
          <span
            className={`inline-block mt-2 text-xs px-2 py-1 rounded-full font-medium
              ${
                task.status === "completed"
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
          >
            {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
          </span>
        </div>
      </div>
      <div className="space-x-2">
         <button onClick={() => navigate(`/tasks/${task._id}`)} className="bg-gray-600 text-white px-3 py-1 rounded">Details</button>
        <button className="text-green-600 cursor-pointer hover:underline"  
        onClick={() => onEdit(task)}>Edit</button>
        <button onClick={handleDelete} className="text-red-500 cursor-pointer hover:underline">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;