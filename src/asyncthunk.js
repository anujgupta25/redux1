import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware  from 'redux-thunk';
import axios from 'axios';

const initialState = {
    loading: false,
    users : [],
    error : ''
}

const USER_REQUEST = 'USER_REQUEST';
const USER_SUCCESS = 'USER_SUCCESS';
const USER_ERROR = 'USER_ERROR';

const userRequest =()=>{
    return{
        type : USER_REQUEST
    }
}

const userSuccess =(users)=>{
    return{
        type : USER_SUCCESS,
        payload : users
    }
}

const userError =(error)=>{
    return{
        type : USER_ERROR,
        payload : error
    }
}


const reducer = (state = initialState, action)=>{

    switch(action.type){

        case 'USER_REQUEST': return{
            ...state,
            loading:true
        }

        case 'USER_SUCCESS': return{
            ...state,
            loading:false, users: action.payload, error:''
        }
        
        case 'USER_ERROR' :return{
            ...state,
            loading:false, users:[], error:action.payload
        }
    }

}

const fetchUser=()=>{
    return function(dispatch){
        dispatch(userRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        const users = response.data.map(value=>value.name)
        // console.log(users);
        dispatch(userSuccess(users))
    })
    .catch(error=>{
        dispatch(userError(error.message))
    })
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const unsubscribe = store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchUser());

