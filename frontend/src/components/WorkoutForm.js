import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutForm = () => {
    const{dispatch} = useWorkoutsContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        //prevent refresh
        e.preventDefault()

        //dummy value
        const workout = {title, load, reps}
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }

        else{
            setError(null)
            console.log('New Workout Added', json)
            setTitle('')
            setLoad('')
            setReps('')
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add Workout</h3>

            <label>Excersize Title: </label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value ={title}></input>

            <label>Load: </label>
            <input type="text" onChange={(e) => setLoad(e.target.value)} value ={load}></input>

            <label>Reps: </label>
            <input type="text" onChange={(e) => setReps(e.target.value)} value ={reps}></input>

            <button>
               Add 
            </button>

            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default WorkoutForm