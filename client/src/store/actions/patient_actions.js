import axios from 'axios';
import {
    P_ADD,
    P_CLEAR,
    P_UPDATE,
    PS_GET
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


// export function clearBook(book){
//     return{
//         type: BOOK_CLEAR,
//         payload: null
//     }
// }

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