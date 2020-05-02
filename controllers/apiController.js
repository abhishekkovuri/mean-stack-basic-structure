let lists = require('../models/todoModel')
let bodyParser = require('body-parser')
module.exports = (app) => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    
    //get user
    app.get('/api/lists', (req, res) => {
        lists.find({}, (err, list) => {
            if (err) throw err
            res.send(list)
        })
    })

    app.get('/api/lists/:uname', (req, res) => {
        lists.find({ username: req.params.uname }, (err, list) => {
            if (err) throw err
            res.send(list)
        })
    })

    app.get('/api/lists/id/:id', (req, res) => {
        lists.findById({ _id: req.params.id }, (err, list) => {
            if (err) throw err
            res.send(list)
        })
    })

    app.post('/api/lists', (req, res) => {
        if (req.body.id) {
            lists.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo, 
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            },(err, list) => {
                if (err) throw err
                res.send('successfully updated')
            })
        } else {
            let newOne = lists({
                username: req.body.username,
                todo: req.body.todo, 
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            })
            newOne.save((err) => {
                if(err) throw err;
                res.send('successfully saved')
            })
        }
    })

    app.delete('/api/lists', (req, res) => {
        lists.findOneAndDelete(req.body.id, (err) => {
            if (err) throw err
            res.send('successfully deleted')
        })
    })
}