// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to MongoDb server');
    }
    console.log('connect to Mongo Db server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectId('5c0909726962685825f3fc11')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });



    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId('5c0910fb3d6c260ad430978f')
    }, {
        $set: {
            name: 'yaser'
        },
        $inc: {
            age: 1
        }

    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    // db.close();
});