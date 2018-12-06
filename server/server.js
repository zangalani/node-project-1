var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = reguire('./db/mongoos.js');
var { Todo } = require('./models/Todo.js');
var { User } = require('./models/users.js');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.post('/todos', (req, res) => {
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('started on prt 3000');
});