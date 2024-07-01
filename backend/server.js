require('dotenv').config()

//USE COMMAND "nodemon server.js" to run the server
const express = require('express')

//Creates the express APP
const app = express()

//Lets us know what request came in IE CRUD
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Responds to get requests through routing
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome'})
})

// Listen to the requests
app.listen(process.env.PORT, () =>{
    console.log('listening on port 4000')
})

process.env