import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext =  () => {
    //context has our state and dispatch
    const context = useContext(WorkoutsContext)

    if(!context){
        throw Error('useWorkoutContex needs to be in scope of WorkoutsContextProvider')
    }

    return context
}