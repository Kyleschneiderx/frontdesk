

import axios from 'axios';
import {
 C_ADD,
 CS_GET,
 C_DELETE,
 C_CLEAR,
 C_CALL
} from '../types';






export function callCollections(){
    console.log("In Call Patient")
    const request = axios.post('/api/collections/call')
    .then( response => response.data)


    return{
        type: C_CALL,
        payload: request
    }
}



export function getCollectionsCallList(){
    const request = axios.get('/api/collections/')
    .then(response => response.data)

    return{
        type: CS_GET,
        payload: request
    }
}


export function addCollectionsCall(patient){

    console.log(patient)
    const request = axios.post('/api/collections/', {...patient, name: patient.firstname, lastname: patient.lastname, patientID: patient.id, statements: patient.statements})
    .then( response => response.data)


    return{
        type: C_ADD,
        payload: request
    }
}


export function deleteCollections(patient){
    console.log(patient)
    const request = axios.delete('api/collections/', { data: patient})
    .then( response => response.data);
    return{
        type: C_DELETE,
        payload: request
    }
}


export function clearCollections(patient){
    return{
        type: C_CLEAR,
        payload: null
    }
}