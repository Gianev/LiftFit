const express = require('express')
const { getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//Post a single workout
router.post('/', createWorkout)

//Delete a single workout
router.delete('/:id', deleteWorkout)

//Update a single workout
router.patch('/:id', updateWorkout)



module.exports = router