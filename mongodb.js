///Users/Acer/mongodb/bin/mongod.exe --dbpath=/Users/Acer/mongodb-data

//Create
// const mongodb = require('mongodb');

//to initialize the connection function necessary to connect to the database to perform CRUD ops
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

//define the connection url  and the database we are trying to connect to
const connectionURL = 'mongodb://127.0.0.1:27017'; //localhost was not used as it causes unstable behaviour
const databaseName = 'task-manager'; //can be any name

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }

    //To insert document
    //Give reference to the specific database you want to manipulate
    const db = client.db(databaseName);

    // //To insert a single document in the 'users' collection
    // db.collection('users').insertOne(
    //   {
    //     _id : id,   //Here a customized id can be provided
    //     name: 'WackadOODLE',
    //     age: 200,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    //   }
    // ); //It expects the name of the collection you are trying to manipulate
    // //InsertOne expects an object as that first argument, and this should contain all of the data you are trying to insert

    //To insert multiple documents
    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Jen',
    //       age: 19,
    //     },
    //     {
    //       name: 'Devon',
    //       age: 50,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert documents');
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection('new tasks').insertMany(
    //   [
    //     {
    //       description: 'pehla',
    //       completed: true,
    //     },
    //     {
    //       description: 'the second one',
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Error hogya re');
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
// useNewURLParser for our url's to get parsed correctly, the cbk function will be called when we're connected to the database
