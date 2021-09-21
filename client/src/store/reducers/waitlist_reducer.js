
import {
    W_ADD,
    WS_GET,
    W_DELETE,
    W_CLEAR,
    W_TEXT
   } from '../types';


export default function(state={}, action){
    switch(action.type){
        case WS_GET:
            return {...state, waitlist: action.payload }
        case W_ADD:
            return {...state, add: action.payload }
        case W_CLEAR:
            return {...state, add: action.payload, single: action.payload, update:  action.payload }
        default: 
            return state;
    }
}