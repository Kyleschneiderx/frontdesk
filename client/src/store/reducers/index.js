import { combineReducers } from 'redux';

// import books from './books_reducer';
import user from './users_reducer'


const rootReducer = combineReducers({
    user  
})

export default rootReducer;