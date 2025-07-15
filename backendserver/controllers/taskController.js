const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    if (!title) return res.status(400).json({ message: "Title is required" });

    const task = await Task.create({ title, description, status });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getTasks = async (req, res) => {
    try{
        const { status } = req.query;
        let filter = {};
    if (status === 'pending' || status === 'completed') {
      filter.status = status;
    }

    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    res.json(tasks);
    }catch(error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Server Error" });
  }

  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
};


const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: "Invalid task ID" });
  }
};


const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedTask) return res.status(404).json({ message: "Task not found" });
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
};