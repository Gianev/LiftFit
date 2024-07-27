import { useEffect, useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

import WorkoutCard from '../components/WorkoutCard'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {

    const {workouts, dispatch} = useWorkoutsContext()
    //const[workouts, setWorkouts] = useState(null)

    //fires on launch once
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok){
                //setWorkouts(json)
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }



        }
        fetchWorkouts()
    }, [])



    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutCard key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm></WorkoutForm>
        </div>
    )
}

export default Home