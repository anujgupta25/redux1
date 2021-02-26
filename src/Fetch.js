import {userRequest, userSuccess, userError} from './actions/Action.js';
import {AUTH_USER, AUTH_ERROR} from './actions/ActionType.js';
import axios from 'axios';
// import {store} from './store/Store.js';


export const fetchUser=()=>{
    return function(dispatch){
        dispatch(userRequest())
    axios.get('http://localhost/api.php/')
    .then(response=>{
        const users = response.data.map(user=>user)
        // console.log(users);
        dispatch(userSuccess(users))
    })
    .catch(error=>{
        dispatch(userError(error.message))
    })
  }
}


export const LoginUser =(username, password)=>{
    return function(dispatch){
        axios.post('http://localhost/loginCheck.php',{username,password})
        .then(response =>{
            dispatch({
                type: AUTH_USER,
                payload : response.data
            })
            
        .catch(error =>{
            dispatch({
                type: AUTH_ERROR,
                payload : "Error with this Credentials"
            })
        })
        })
    }
}
// store.dispatch(fetchUser());

