import React,{useReducer} from 'react'
import AppReducer from "../../reducers/Application";

export const InitialState = {
    isLoading:false
}
export default () => {
    const [state, dispatch] = useReducer(AppReducer, InitialState)
    return {
        ...state,
        dispatch,
    }
}