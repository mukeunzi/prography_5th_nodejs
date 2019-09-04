const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo-controller');

router.get('/', todoController.getTodoList);
router.post('/', todoController.createTodo);
router.delete('/:todo_id', todoController.deleteTodo);
router.patch('/', todoController.updateTodo);

module.exports = router;
