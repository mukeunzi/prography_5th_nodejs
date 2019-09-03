const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const db = low(new FileSync(`${__dirname}/../data/todo.json`));

const getTodoList = () => {
	const todoList = db.get('todoList').value();
	return todoList;
};

const createTodo = todo_contents => {
	const todo_id = makeUniqueId();
	const todoData = { todo_id, todo_contents };

	db.get('todoList')
		.push(todoData)
		.write();
};

const makeUniqueId = () => {
	const min = 100;
	const max = 999;

	const uniqueId = Math.floor(Math.random() * (max - min + 1)) + min;
	return uniqueId;
};

module.exports = { getTodoList, createTodo };
