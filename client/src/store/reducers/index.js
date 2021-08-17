import { combineReducers } from 'redux';

import patients from './patients_reducer';
import user from './users_reducer'
import file from './files_reducer'

const rootReducer = combineReducers({
    user,
    patients,
    file
})

export default rootReducer;