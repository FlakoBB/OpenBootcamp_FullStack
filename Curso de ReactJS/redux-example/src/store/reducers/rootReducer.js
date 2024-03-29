import { combineReducers } from 'redux'
import { todosReducer } from './todosReducer'
import { filterReducer } from './filterReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers(
    {
        // stateName : reducer that will contol it
        todosState: todosReducer,
        filterState: filterReducer,
        //* ASYNC Example (LOGIN USER)
        userState: userReducer
        // ... add more states and reducers to include them in the store
    }
)