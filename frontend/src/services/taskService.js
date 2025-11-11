// services/taskService.js
import API from '../api';

export const fetchTasks = (params) => API.get('/tasks', { params }).then(res => res.data);
export const getTask = (id) => API.get(`/tasks/${id}`).then(res => res.data);
export const createTask = (payload) => API.post('/tasks', payload).then(res => res.data);
export const updateTask = (id, payload) => API.put(`/tasks/${id}`, payload).then(res => res.data);
export const patchTask = (id, payload) => API.patch(`/tasks/${id}`, payload).then(res => res.data);
export const deleteTask = (id) => API.delete(`/tasks/${id}`).then(res => res.data);
