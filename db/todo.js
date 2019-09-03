const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const db = low(new FileSync(`${__dirname}/../data/todo.json`));

const getTodoList = () => {
	const todoList = db
		.get('todoList')
		.filter({ status_code: 1 })
		.value();

	return todoList;
};

const createTodo = newTodoData => {
	db.get('todoList')
		.push(newTodoData)
		.write();
};

const deleteTodo = todo_id => {
	db.get('todoList')
		.find({ todo_id: Number(todo_id) })
		.assign({ status_code: 0 })
		.write();
};

const updateTodo = updateData => {
	const { todo_id, todo_contents } = updateData;

	db.get('todoList')
		.find({ todo_id: Number(todo_id) })
		.assign({ todo_contents })
		.write();
};

module.exports = { getTodoList, createTodo, deleteTodo, updateTodo };
