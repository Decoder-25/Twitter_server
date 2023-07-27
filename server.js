const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();


//port
const PORT = process.env.PORT || 6000; 

//listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});