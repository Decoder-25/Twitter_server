const express = require('express');
const dotenv = require('dotenv');

//files import
const connectDB = require('./src/config/db')

dotenv.config();

//creating express app
const app = express();

//mongodb connection
connectDB();

//port
const PORT = process.env.PORT || 6000; 

//listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});