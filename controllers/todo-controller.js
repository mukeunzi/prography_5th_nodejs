const todoDB = require('../db/todo');
const { makeUniqueId } = require('../utils/unique-id');

class TodoController {
	getTodoList(req, res, next) {
		res.render('index', { title: '묵투두', todoList: todoDB.getTodoList() });
	}

	createTodo(req, res, next) {
		const todo_contents = req.body.todo_contents;
		const newTodoData = { todo_id: makeUniqueId(), todo_contents, status_code: 1 };

		todoDB.createTodo(newTodoData);
		res.json(todoDB.getTodoList());
	}

	deleteTodo(req, res, next) {
		const todo_id = req.body.todo_id;

		todoDB.deleteTodo(todo_id);
		res.json(todoDB.getTodoList());
	}

	updateTodo(req, res, next) {
		const { todo_id, todo_contents } = req.body;
		const updateData = { todo_id, todo_contents };

		todoDB.updateTodo(updateData);
		res.json(todoDB.getTodoList());
	}
}

module.exports = new TodoController();
