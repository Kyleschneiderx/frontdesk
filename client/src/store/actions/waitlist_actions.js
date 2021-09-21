

import axios from 'axios';
import {
 W_ADD,
 WS_GET,
 W_DELETE,
 W_CLEAR,
 W_TEXT
} from '../types';

import moment from 'moment'





export function textWaitlist(time){
    console.log("Texting Patients")
    time.forEach(item => console.log(moment(item).format('MMMM Do, h:mm a')))
    console.log(time)
    const request = axios.post('/api/waitlist/text', time)
    .then( response => response.data)


    return{
        type: W_TEXT,
        payload: request
    }
}



export function getWaitlist(){
    const request = axios.get('/api/waitlist/')
    .then(response => response.data)

    return{
        type: WS_GET,
        payload: request
    }
}


export function addWaitlist(patient){

    console.log(patient)
    const request = axios.post('/api/waitlist/', {...patient, name: patient.firstname, patientID: patient.id})
    .then( response => response.data)


    return{
        type: W_ADD,
        payload: request
    }
}


export function deleteWaitlist(patient){
    console.log(patient)
    const request = axios.delete('api/waitlist/', { data: patient})
    .then( response => response.data);
    return{
        type: W_DELETE,
        payload: request
    }
}


export function clearWaitlist(patient){
    return{
        type: W_CLEAR,
        payload: null
    }
}