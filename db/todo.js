const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const db = low(new FileSync(`${__dirname}/../data/todo.json`));

const getTodoList = () => {
	const todoList = db.get('todoList').value();
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

module.exports = { getTodoList, createTodo, deleteTodo };
