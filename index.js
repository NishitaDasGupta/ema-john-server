const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express());

app.get ('/',(req,res)=> {
    res.send("Ema john is comming!!")
})

app.listen(port , (req,res)=> {
    console.log(`Ema-john;s port is ${port}`);
})