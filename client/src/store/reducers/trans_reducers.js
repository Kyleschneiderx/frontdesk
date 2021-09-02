import {
    GET_TRANS,
} from '../types';



export default function(state={}, action){
    switch(action.type){
        case GET_TRANS:
            return {...state, depositList: action.payload }
        default: 
            return state;
    }
}