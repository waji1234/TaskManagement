import React, { useState } from 'react'

const TaskForm = () => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
 let editableTask = false
  return (
    <div>
      <form>
         <div>
        <label className="block font-medium">Title</label>
        <input
          className="w-full border p-2 rounded"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />
      </div>
      <div>
        <label className="block font-medium">Description</label>
        <textarea
          className="w-full border p-2 rounded"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Enter task description"
        />
      </div>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        {editableTask ? "Update" : "Create"}
      </button>
      </form>
    </div>
  )
}

export default TaskForm