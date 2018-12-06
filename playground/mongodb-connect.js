// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to MongoDb server');
    }
    console.log('connect to Mongo Db server');

    // db.collection('Todos').insertOne({
    //     text: 'some text',
    //     completed: false

    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //insert new doc into users (name, age , location)
    // db.collection('users').insertOne({
    //     _id: 123,
    //     name: 'yaser',
    //     age: 31,
    //     location: 'tehran'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert user', err);
    //     }

    //     console.log(result.ops);
    // });

    db.close();
});