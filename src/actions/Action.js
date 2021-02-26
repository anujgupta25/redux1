import {USER_REQUEST,USER_SUCCESS,USER_ERROR} from './ActionType.js';

export const userRequest =()=>{
    return{
        type : USER_REQUEST
    }
}

export const userSuccess =(users)=>{
    return{
        type : USER_SUCCESS,
        payload : users
    }
}

export const userError =(error)=>{
    return{
        type : USER_ERROR,
        payload : error
    }
}