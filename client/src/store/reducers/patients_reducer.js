import {
    P_ADD,
    P_CLEAR,
    P_UPDATE,
    PS_GET,
    P_DELETE
} from '../types';


export default function(state={}, action){
    switch(action.type){
        case P_ADD:
            return {...state, add: action.payload }
        case P_CLEAR:
            return {...state, add: action.payload, single: action.payload, update:  action.payload }
        case P_UPDATE:
            return {...state, update: action.payload }
        case PS_GET:
            return {...state, collection: action.payload}
        default: 
            return state;
    }
}