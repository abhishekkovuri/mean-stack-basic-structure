let mongoose = require('mongoose')
let schema = mongoose.Schema
let toDoSchema = new schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
})

let Todo = mongoose.model('list', toDoSchema)
module.exports = Todo