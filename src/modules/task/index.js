const { Router } = require('express');

const TaskController = require('./controller');

const taskRouter = new Router();
const taskController = new TaskController();

taskRouter
	.get('/tasks', taskController.getTasks)
	.get('/tasks/:id', taskController.getTaskById)
	.put('/tasks/:id', taskController.updateTaskById)
	.patch('/tasks/:id', taskController.updateTaskById)
	.delete('/tasks/:id', taskController.deleteTaskById)
	.post('/tasks/create', taskController.createNewTask);

module.exports = taskRouter;
