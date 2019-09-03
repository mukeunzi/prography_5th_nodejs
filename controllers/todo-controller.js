const todoData = require('../db/todo');

class TodoController {
	getTodoList(req, res, next) {
		res.json(todoData.getTodoList());
	}
}

module.exports = new TodoController();
