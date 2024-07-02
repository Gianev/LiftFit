require('dotenv').config()

//USE COMMAND "nodemon server.js" to run the server
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')


//Creates the express APP
const app = express()

//Lets us know what request came in IE CRUD, MIDDLEWARE
app.use(express.json())


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Responds to get requests through routing
//app.get('/', (req, res) => {
    //res.json({mssg: 'Welcome'})
//})

//routes CRUD if /api/workouts
app.use('/api/workouts', workoutRoutes)

//Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen to the requests
        app.listen(process.env.PORT, () =>{
        console.log('listening on port 4000')
         })
    })
    .catch((error) => {
        console.log(error)
    })


process.env