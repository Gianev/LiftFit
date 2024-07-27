import { createContext, useReducer } from 'react'

//creates the context
export const WorkoutsContext = createContext()

//previous state, actiion, aka the workouts:null from dispatch
export const workoutsReducer = (state, action) => {
    switch(action.type){
        //Adding a workout
        case 'SET_WORKOUTS':
            return{
                workouts: action.payload
            }
        //create, ...state.workouts is the preevious ones and payloads the new one
        case 'CREATE_WORKOUTS':
            return{
                workouts:[action.payload, ...state.workouts]
            }

        default:
            return state
    }
}
//context component provider, children prop would be app
//use reducer needs function name and an inital value / state
//we gave an object w/ value oif workouts=null
//similar to usestate
export const WorkoutContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts:null
    })
    //describes state change i want to make and a payload with the values 
    //dispatch({type: 'SET_WORKOUTS', payload: [{}, {}]})

    return(
        //anything in this component has access to the context
        //anything in value is accessible to all components with context
        <WorkoutContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutContext.Provider>
    )
}