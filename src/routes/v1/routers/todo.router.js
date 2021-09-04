const express = require('express');
const asyncify = require('express-asyncify'); 

const {
   getTodos,
   getTodo,
   createTodo
} = require('../../../controllers/todo.controller');

const Todo = require('../../../models/Todo.model');

const advancedResults = require('../../../middleware/advanced.mw');

// router
const router = express.Router({ mergeParams: true });

const { protect, authorize } = require('../../../middleware/auth.mw');

const roles = ['superadmin', 'admin'];
const allRoles = ['superadmin', 'admin', 'user'];

 
router.get('/', protect, authorize(allRoles), advancedResults(Todo), getTodos);
router.get('/:id', protect, authorize(allRoles), getTodo);
router.post('/', protect, authorize(allRoles), createTodo);
 
module.exports = router;