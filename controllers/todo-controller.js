const todoData = require('../db/todo');

class TodoController {
	getTodoList(req, res, next) {
		res.json(todoData.getTodoList());
	}

	createTodo(req, res, next) {
		const todoContents = req.body.addContents;
		todoData.createTodo(todoContents);
		res.json(todoData.getTodoList());
	}
}

module.exports = new TodoController();
