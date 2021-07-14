import {
    P_ADD,
    P_CLEAR,
    P_UPDATE,
    PS_GET,
    P_DELETE,
    P_CALLED,
    P_NOTES_ADD,
    P_NOTES_GET,
    P_GET
} from '../types';


export default function(state={}, action){
    switch(action.type){
        case P_NOTES_GET:
            return {...state, notesList: action.payload }
        case P_ADD:
            return {...state, add: action.payload }
        case P_CLEAR:
            return {...state, add: action.payload, single: action.payload, update:  action.payload }
        case P_UPDATE:
            return {...state, update: action.payload }
        case P_GET:
            return {...state, single: action.payload }
        case PS_GET:
            return {...state, collection: action.payload, notesList:[]}
        case P_NOTES_ADD:
            return {...state, notesList: action.payload.notes}
        case P_CALLED:
            return {...state, update: action.payload }
        default: 
            return state;
    }
}