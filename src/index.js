// /Users/Acer/mongodb/bin/mongod.exe --dbpath=/Users/Acer/mongodb-data
// const app = require('./app')
const express = require('express');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
require('./db/mongoose'); 

const app = express();
const port = process.env.PORT ;

app.use(express.json()); //parse incoming json, so that it can be used as an object
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
