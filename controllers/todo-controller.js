const todoData = require('../db/todo');
const { makeUniqueId } = require('../utils/unique-id');

class TodoController {
	getTodoList(req, res, next) {
		res.json(todoData.getTodoList());
	}

	createTodo(req, res, next) {
		const todo_contents = req.body.todo_contents;
		const newTodoData = { todo_id: makeUniqueId(), todo_contents, status_code: 1 };
		todoData.createTodo(newTodoData);
		res.json(todoData.getTodoList());
	}

	deleteTodo(req, res, next) {
		const todo_id = req.body.todo_id;
		todoData.deleteTodo(todo_id);
		res.json(todoData.getTodoList());
	}
}

module.exports = new TodoController();
