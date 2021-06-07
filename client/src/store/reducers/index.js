import { combineReducers } from 'redux';

import patients from './patients_reducer';
import user from './users_reducer'


const rootReducer = combineReducers({
    user,
    patients  
})

export default rootReducer;