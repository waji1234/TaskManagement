import React, { useState, useEffect } from "react";
import { createTask,updateTask } from "../apis/api";
import { toast } from "react-toastify";

const TaskForm = ({ editableTask, onSuccess }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editableTask) {
      setTitle(editableTask.title || "");
      setDescription(editableTask.description || "");
    }
  }, [editableTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setLoading(true);
    try {
      if (editableTask) {
        await updateTask(editableTask._id, { title, description });
        toast.success("Task updated successfully!");
      } else {
        await createTask({ title, description });
        toast.success("Task created successfully!");
      }
      setTitle("");
      setDescription("");
      onSuccess?.();
    } catch (error) {
      console.error("Error saving task:", error);
      toast.error("Failed to save task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1">Title</label>
          <input
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Description</label>
          <textarea
            className="w-full border p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Saving..." : editableTask ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;