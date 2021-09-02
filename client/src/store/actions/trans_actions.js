import axios from 'axios';
import {
 GET_TRANS,
} from '../types';


export async function getTrans(token){
    console.log(token)
    let request = await axios.post("/api/deposits/transactions", {access_token:token.access_token, start_date: token.start_date, end_date: token.end_date})
    .then( response => response.data)


    return{
        type: GET_TRANS,
        payload: request
    }
}