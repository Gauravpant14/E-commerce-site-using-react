import { createStore, applyMiddleware } from 'redux'
// import { countReducer } from './../reducers/userReducer'
// import { apiReducer } from './../reducers/apiReducer'
import {rootReducer} from './../rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore( rootReducer ,composeWithDevTools(applyMiddleware(thunk)) ) 


export default store