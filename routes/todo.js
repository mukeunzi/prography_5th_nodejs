const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo-controller');

router.get('/', todoController.getTodoList);
router.post('/', todoController.createTodo);
router.delete('/', todoController.deleteTodo);
router.patch('/', todoController.updateTodo);

module.exports = router;
