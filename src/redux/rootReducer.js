import {combineReducers } from 'redux'
import {apiReducer} from './reducers/apiReducer'
import {catReducer} from './reducers/catReducer'
import {filterReducer} from './reducers/filterReducer'
export const rootReducer = combineReducers({
    products:apiReducer,
    category:catReducer,
    id:filterReducer
})

export default rootReducer;