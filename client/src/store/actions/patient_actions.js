import axios from 'axios';
import {
    P_ADD,
    P_CLEAR,
    P_UPDATE,
    PS_GET,
    P_DELETE,
    P_CALLED
} from '../types';





// export function editBook(book){
//     const request = axios.patch('/api/books/book', book)
//     .then(response => {
//         return response.data
//     }).catch((err)=>{ 
//         return false
//     })


// return{
//     type: BOOK_UPDATE,
//     payload: request
// }
// }

// export function getBook(bookId){
//     const request = axios.get(`/api/books/book?id=${bookId}`)
//         .then(response => {
//             return response.data
//         }).catch((err)=>{
//             return false
//         })


//     return{
//         type: BOOK_GET,
//         payload: request
//     }
// }


// export function addBook(book){
//     const request = axios.post('/api/books/book', book)
//     .then( response => response.data)


//     return{
//         type: BOOK_ADD,
//         payload: request
//     }
// }


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