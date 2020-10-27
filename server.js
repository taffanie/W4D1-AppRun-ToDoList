const express = require('express')
const app = express()
const Task = require('./src/Task')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/tasks', (req, res) => {
    res.send(Task.all)
})

app.post('/tasks', (req, res) => {
    // console.log(req.body)
    Task.all.push(req.body)
    res.send()
})

app.listen(3000, () => {
    new Task("do laundry"),
    new Task("wash dishes"),
    console.log('server running on port', 3000)
})