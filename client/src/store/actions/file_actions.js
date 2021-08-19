

import axios from 'axios';
import {
 MF_ADD,
 F_ADD,
 FS_GET,
 F_DELETE,
 F_CLEAR,
 F_CALL
} from '../types';






export function callPatients(day){
    console.log("In Call Patient")
    console.log(day)
    const request = axios.post('/api/file/call', day)
    .then( response => response.data)


    return{
        type: F_CALL,
        payload: null
    }
}




export function massAddPatietCall(patientList){
    console.log(patientList)
    const request = axios.post('/api/file/', patientList)
    .then( response => response.data)


    return{
        type: MF_ADD,
        payload: request
    }
}

export function getPatientCallList(){
    const request = axios.get('/api/file/')
    .then(response => response.data)

    return{
        type: FS_GET,
        payload: request
    }
}


export function addPatietCall(patient){

    console.log(patient)
    const request = axios.post('/api/file/addone', {...patient, name: patient.firstname, patientID: patient.id, file_name:'manually'})
    .then( response => response.data)


    return{
        type: F_ADD,
        payload: request
    }
}


export function deletePatient(patient){
    console.log(patient)
    const request = axios.delete('api/file/', { data: patient})
    .then( response => response.data);
    return{
        type: F_DELETE,
        payload: request
    }
}


export function clearFile(patient){
    return{
        type: F_CLEAR,
        payload: null
    }
}