import React from 'react'
import TaskItem from './TaskItem';
 
const dummyTasks = [
  { id: 1, title: "Sample Task 1", description: "Description for Task 1", status: "pending" },
  { id: 2, title: "Sample Task 2", description: "Description for Task 2", status: "completed" },
  { id: 3, title: "Sample Task 3", description: "Description for Task 3", status: "pending" },
  { id: 4, title: "Sample Task 4", description: "Description for Task 4", status: "completed" },
];

// const dummyTasks = [

// ];

const TaskList = () => {
  return (
   <div className="space-y-4">
      {dummyTasks.length === 0 ? (
        <div className="text-center text-gray-500 p-8 bg-white rounded shadow">
          <p className="text-lg">No tasks found.</p>
          <p className="text-sm">Click "Add Task" to create your first one!</p>
        </div>
      ) : (
        dummyTasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  )
}

export default TaskList
