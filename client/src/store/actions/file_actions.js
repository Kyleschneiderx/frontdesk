

import axios from 'axios';
import {
 MF_ADD,
 F_ADD,
 FS_GET,
 F_DELETE
} from '../types';







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


export function addPatietCall(note){
    const request = axios.post('/api/file/add', note)
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