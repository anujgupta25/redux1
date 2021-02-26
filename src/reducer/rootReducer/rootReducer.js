import { combineReducers } from 'redux';
import {reducer} from '../reducer.js';
import {auth_reducer} from '../auth__reducer.js';

export const rootReducer = combineReducers({
    showReducer : reducer,
    AuthReducer : auth_reducer
})