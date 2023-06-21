require ('dotenv').config()
require('./database/connection')

const express = require("express")
const path = require("path")

const app = express()
const cors = require('cors');

const sataticDir = path.join(__dirname, "../public")
app.use(express.static(sataticDir))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

// Define a route to handle AI data
app.get('/test', (req, res) => {
    // Your AI data processing logic here
    
    // Sample response data
    const aiData = {
      message: 'This is AI data',
      timestamp: new Date().toISOString()
    };
    
    // Send the AI data as JSON response
    res.json(aiData);
  });


const userRoutes = require('../routes/user');
app.use("/user" , userRoutes)

module.exports = app