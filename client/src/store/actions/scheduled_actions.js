import axios from 'axios';
import {
    S_ADD
} from '../types';


export function addSchedule(patient){
    console.log(patient)
    const request = axios.post('api/scheduled/schedule', patient)
    .then(response => response.data)

    return{
        type: S_ADD,
        payload: request
    }
}