var mongoose = require('mongoose');

mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost:27017/Todoapp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// var newTodo = new Todo({
//     text: 'cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('save todo', doc);
// }, (e) => {
//     console.log('unable to save todo')

// });
var otherTodo = new Todo({
    text: 'feed the cat',
    completed: true,
    completede: 456
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('unable to save', e);
});