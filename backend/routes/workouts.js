const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()

//GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

//GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single workout'})
})

//Post a single workout
router.post('/', async (req, res) => {
    const{title, load, reps}=req.body

    try{
        const workout= await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }
    
    catch(error){
        res.status(400).json({error: error.message})
    }
})

//Delete a single workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a single workout'})
})

//Update a single workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a workout'})
})



module.exports = router