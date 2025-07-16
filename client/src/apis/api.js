import axios from "axios";

 const API_URL = `${import.meta.env.VITE_API_BASE_URL}/tasks`;

export const getTasks = async (status = "") => {
  const url = status ? `${API_URL}?status=${status}` : API_URL;
  const res = await axios.get(url);
  return res.data;
};

export const getTask = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const createTask = async (taskData) => {
  const res = await axios.post(API_URL, taskData);
  return res.data;
};

export const updateTask = async (id, updatedData) => {
  const res = await axios.put(`${API_URL}/${id}`, updatedData);
  return res.data;
};

export const deleteTask = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};