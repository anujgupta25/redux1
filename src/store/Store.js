import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from '../reducer/rootReducer/rootReducer.js';


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export const unsubscribe = store.subscribe(()=>{console.log(store.getState())});