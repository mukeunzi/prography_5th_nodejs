const todoData = require('../db/todo');
const { makeUniqueId } = require('../utils/unique-id');

class TodoController {
	getTodoList(req, res, next) {
		res.json(todoData.getTodoList());
	}

	createTodo(req, res, next) {
		const todo_contents = req.body.todo_contents;
		const newTodoData = { todo_id: makeUniqueId(), todo_contents, todo_status: 1 };
		todoData.createTodo(newTodoData);
		res.json(todoData.getTodoList());
	}
}

module.exports = new TodoController();
