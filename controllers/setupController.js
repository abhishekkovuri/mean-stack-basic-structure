let todo = require('../models/todoModel')

module.exports = (app) => {

    app.get('/api/setupTools', (req, res) => {
        //seeding the data
        let starterToDo = [{
            username: 'abhishek Kovuri',
            todo: 'Drink coffee',
            isDone: false,
            hasAttachment: false
        },
        {
            username: 'abhishek Kovuri',
            todo: 'have a bath',
            isDone: false,
            hasAttachment: false
        },
        {
            username: 'abhishek Kovuri',
            todo: 'learn node',
            isDone: false,
            hasAttachment: false
        }]
        todo.create(starterToDo, (err, results) => {
            res.send(results)
        })
    })
}