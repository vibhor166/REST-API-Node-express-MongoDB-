//Update
//UpdateOne or UpdateMany
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
    db.collection('users')
      .updateOne(
        {
          _id: new ObjectID('5ec98b5a2f032f1440d2f1df'), //first argument is the id which we want to update
        },
        {
          $set: {
            name: 'Andrew22222',
          },
          $inc: {
            age: 5,
          }, //update operators to define the behaviour we want to perform
          //allows setting new values of fields in our document
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
