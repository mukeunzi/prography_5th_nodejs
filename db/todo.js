const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const db = low(new FileSync(`${__dirname}/../data/todo.json`));

const getTodoList = () => {
	const todoList = db.get('todoList').value();
	return todoList;
};

module.exports = { getTodoList };
