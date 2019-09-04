const todoDB = require('../db/todo');
const { makeUniqueId } = require('../utils/unique-id');

class TodoController {
	getTodoList(req, res, next) {
		res.render('index', { title: '묵투두', todoList: todoDB.getTodoList() });
	}

	createTodo(req, res, next) {
		const todo_contents = req.body.todo_contents;
		const todo_id = makeUniqueId();
		const status_code = 1;

		const newTodoData = { todo_id, todo_contents, status_code };
		todoDB.createTodo(newTodoData);

		const newTodoElement = `<div id=${todo_id}>
															<span>${todo_contents}</span>
															<button class="updateButton" onclick="updateTodoList(event.currentTarget.parentNode)">수정</button>
															<button class="deleteButton" onclick="deleteTodoList(event.currentTarget.parentNode)">삭제</button>
														</div>`;

		res.send(newTodoElement);
	}

	deleteTodo(req, res, next) {
		const todo_id = req.params.todo_id;

		todoDB.deleteTodo(todo_id);
		res.end();
	}

	updateTodo(req, res, next) {
		const { todo_id, todo_contents } = req.body;
		const updateData = { todo_id, todo_contents };

		todoDB.updateTodo(updateData);
		res.json(todoDB.getTodoList());
	}
}

module.exports = new TodoController();
