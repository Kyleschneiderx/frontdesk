
import {
    MF_ADD,
    F_ADD,
    FS_GET
} from '../types';



export default function(state={}, action){
    switch(action.type){
        case FS_GET:
            return {...state, callsList: action.payload }
        case MF_ADD:
            return {...state, add: action.payload }
        case F_ADD:
            return {...state, add: action.payload, single: action.payload, update:  action.payload }
        default: 
            return state;
    }
}