
import {
    C_ADD,
    CS_GET,
    C_CLEAR
} from '../types';



export default function(state={}, action){
    switch(action.type){
        case CS_GET:
            return {...state, callsList: action.payload }
        case C_ADD:
            return {...state, add: action.payload }
        case C_CLEAR:
            return {...state, add: action.payload, single: action.payload, update:  action.payload }
        default: 
            return state;
    }
}