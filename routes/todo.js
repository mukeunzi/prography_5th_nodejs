const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo-controller');

router.get('/', todoController.getTodoList);

module.exports = router;
