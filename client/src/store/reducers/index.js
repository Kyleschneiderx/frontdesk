import { combineReducers } from 'redux';

import patients from './patients_reducer';
import user from './users_reducer'
import file from './files_reducer'
import trans from './trans_reducers'
import waitlist from './waitlist_reducer'
import collections from './collections_reducer'

const rootReducer = combineReducers({
    user,
    patients,
    file,
    trans,
    collections,
    waitlist
})

export default rootReducer;