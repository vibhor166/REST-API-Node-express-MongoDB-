//Read
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName); //Give reference to the specific database you want to manipulate

    db.collection('users').findOne(
      { _id: new ObjectID('5ec9baa3b36d512b3878dc94') },
      (error, user) => {
        if (error) {
          return console.log('Unable to fetch');
        }
        console.log(user);
      }
    ); //The object is used to specify our search criteria

    //To fetch multiples pieces of data
    // db.collection('users')
    //   .find({ age: 20 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });
    // db.collection('users')
    //   .find({ age: 20 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });
    db.collection('new tasks').findOne(
      { _id: new ObjectID('5ec9a52867ab9f1fc803cf67') },
      (error, task) => {
        console.log(task);
      }
    );
    db.collection('new tasks')
      .find({ completed: false })
      .toArray((error, task) => {
        console.log(task);
      });
  }
);
