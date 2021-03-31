import {combineReducers } from 'redux'
import {apiReducer} from './reducers/apiReducer'
import {catReducer} from './reducers/catReducer'

export const rootReducer = combineReducers({
    products:apiReducer,
    category:catReducer
})

export default rootReducer;