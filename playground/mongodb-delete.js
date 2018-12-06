// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to MongoDb server');
    }
    console.log('connect to Mongo Db server');

    //deletemany
    // db.collection('Todos').deleteMany({ text: 'eat lunch' }).then((result) => {
    //     console.log(result);
    // });
    //deletOne
    // db.collection('Todos').deleteOne({ text: 'eat lunch' }).then((result) => {
    //     console.log(result);
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('users').deleteMany({ name: 'naser' });

    db.collection('users').findOneAndDelete({ _id: new ObjectId("5c0824abfbff4d2e100adfde") }).then((resut) => {
        console.log(JSON.stringify(result, undefined, 2))
    });

    // db.close();
});