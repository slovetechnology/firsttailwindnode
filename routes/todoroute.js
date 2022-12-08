const { savetodo, alltodo, deleteTodo, getTodo, updateTodo } = require('../controllers/todocontroller');

const router = require('express').Router();

router.post('/save', savetodo)
router.get('/', alltodo)
router.delete('/:id', deleteTodo)
router.get('/:id', getTodo)
router.put('/save/:id', updateTodo)

module.exports = router