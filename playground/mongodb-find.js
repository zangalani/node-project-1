// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to MongoDb server');
    }
    console.log('connect to Mongo Db server');

    // db.collection('Todos').find().
    // toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to feth todo', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('unable to feth todo', err);
    // });

    db.collection('users').find({ name: 'naser' }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });
    // db.close();
});