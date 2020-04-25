import React, {useReducer} from 'react'
import AuthReducer from "../../reducers/Authentication";
import { UPDATE_TOKEN } from '../../actions';

export const InitialState = {
    token:0
}
export default () => {
    const [state, dispatch] = useReducer(AuthReducer, InitialState)    
    const updatetoken = (token) => dispatch({type: UPDATE_TOKEN, token}) 
    return {
        ...state,
        dispatch,
        updatetoken
    }
}