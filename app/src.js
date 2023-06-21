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


const userRoutes = require('../routes/user');
app.use("/user" , userRoutes)

module.exports = app