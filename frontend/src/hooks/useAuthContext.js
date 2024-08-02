import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext =  () => {
    //context has our state and dispatch
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useAuthContex needs to be in scope of WorkoutsContextProvider')
    }

    return context
}