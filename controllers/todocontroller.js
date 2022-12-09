const Todo = require('../models/todomodel')

exports.savetodo = async(req, res) => {
    try {
        const {title} = req.body;
        const newTodo = new Todo({title});
        await newTodo.save()
        .then(() => {
            res.json({status: 200, msg: 'Todo Saved'})
        })
        .catch((err) => res.json({status: 400, msg: `Todo Not Saved ${err}`}))
    } catch (error) {
        res.json({satus: 400, msg: `Error ${error}`})
    }
}
exports.updateTodo = async(req, res) => {
    try {
        const {title} = req.body;
        const newTodo = await Todo.findById(req.params.id)
        .then(item => {
            item.title = title;
            item.save()
            .then(() => {
                res.json({status: 200, msg: 'Todo Updated'})
            })
            .catch(() => res.json({status: 400, msg: 'Todo Not Saved'}))
        });
    } catch (error) {
        res.json({satus: 400, msg: `Error ${error}`})
    }
}
exports.alltodo = async(req, res) => {
    try {
        const todos = await Todo.find().sort({createdAt: -1})
        res.json({status: 200, msg: todos})
    } catch (error) {
        res.json({status: 404, msg: 'No todo found'})
    }
}
exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        res.json({status: 200})
    } catch (error) {
        return res.json({status: 404, msg: `Error ${error}`})
    }
}
exports.getTodo = async (req, res) => {
    try {
        const data = await Todo.findById(req.params.id)
        res.json({status: 200, msg: data})
    } catch (error) {
        return res.json({status: 404, msg: `Error ${error}`})
    }
}