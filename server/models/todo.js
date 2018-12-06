var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        defualt: false
    },
    completedAt: {
        type: Number,
        defualt: null
    }
});

module.exportd = { Todo };