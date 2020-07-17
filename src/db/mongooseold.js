const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//Defining a model
const User = mongoose.model('User', {
  //mongoose pluralizes and converts to lower case i.e. User becomes users and uses that as the collection name
  name: {
    type: String,
    required: true,
    //setting up a custom validator
  },
  email: {
    type: String,
    required: true,
    trim: true,
    default: 'yowdy@wacka.com',
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a number');
      }
    },
  },
  password: {
    required: true,
    type: String,
    trim: true,
    validate(password) {
      if (password.length < 6 || password === 'password') {
        throw new Error('bhai error aaya re');
      }
    },
  },
});

const Task = mongoose.model('Tasks', {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//Creating an instance of the model
const me = new User({
  name: 'wacka',
  age: 26,
  email: 'rgordon@gmail.com',
  password: 'pom',
});

const myTask2 = new Task({
  // description: '    Testing my Code      ',
  completed: true,
});

//To save the model instance, use the save method. And this returns a promise
// me.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// myTask
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
myTask2
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
