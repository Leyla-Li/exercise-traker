const express = require('express');
const cors =require('cors');
const mongoose = require('mongoose');
const mongodb = require('mongodb');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGOLAB_COPPER_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', ()=>{
   console.log('MongoDB connected successfully'); 
})

//import routes
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});