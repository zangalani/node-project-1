var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        mainlength: 1
    }
});

module.exportd = { User };