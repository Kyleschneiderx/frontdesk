import axios from 'axios';
import {
    P_ADD,
    P_CLEAR,
    P_UPDATE,
    PS_GET,
    P_DELETE,
    P_CALLED,
    P_NOTES_ADD,
    P_NOTES_GET,
    P_NOTES_UPDATE,
    P_GET
} from '../types';



export function editPatientNotes(note){
    console.log(note)
    const request = axios.patch('/api/notes/edit', note)
    .then(response => {
        return response.data
    }).catch((err)=>{ 
        return false
    })


    return{
    type: P_NOTES_UPDATE,
    payload: request
    }
}





export function editPatient(patient){
    const request = axios.patch('/api/patient/edit', patient)
    .then(response => {
        return response.data
    }).catch((err)=>{ 
        return false
    })


    return{
    type: P_UPDATE,
    payload: request
    }
}

export function getPatient(patientId){
    const request = axios.get(`/api/patient/edit?id=${patientId}`)
        .then(response => {
            return response.data
        }).catch((err)=>{
            return false
        })


    return{
        type: P_GET,
        payload: request
    }
}


export function addPatient(patient){
    const request = axios.post('/api/patient/add', patient)
    .then( response => response.data)


    return{
        type: P_ADD,
        payload: request
    }
}


export function clearPatient(patient){
    return{
        type: P_CLEAR,
        payload: null
    }
}


export function patientCalled(patient){

    console.log(patient.called + 1)

    const request = axios.patch('api/patient/', {...patient, called: patient.called + 1})
    .then(response => {
        return response.data
    }).catch((err)=>{ 
        return false
    })

    return{
        type: P_CALLED,
        payload: request
    }
}



export function deletePatient(patient){
    console.log(patient)
    const request = axios.delete('api/patient/', { data: patient})
    .then( response => response.data);
    return{
        type: P_DELETE,
        payload: request
    }
}

export function addPatientNotes(note){
    console.log(note)
    const request = axios.post('/api/notes/', note)
    .then( response => response.data)


    return{
        type: P_NOTES_ADD,
        payload: request
    }
}

export function getPatientNotes(note){
    console.log(note)
    const request = axios.get('/api/notes/' ,{
        params: {
          noteList: note
        }
    })
    .then(response => response.data)

    return{
        type: P_NOTES_GET,
        payload: request
    }
}




export function getPatients(list){
    console.log("in the action")
    const request = axios.get('api/patient/')
    .then( response =>{
        return list ? [...list, ...response.data] : response.data
    });

    return{
        type: PS_GET,
        payload: request
    }
}