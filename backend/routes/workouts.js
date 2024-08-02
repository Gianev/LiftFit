const express = require('express')
const { getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//use middleware, requires auth for the routes below
router.use(requireAuth)

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