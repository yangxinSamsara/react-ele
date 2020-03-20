import { combineReducers } from 'redux'
import loginReducer from './loginReducer'

let allReducers = combineReducers({
    loginReducer
})

export default allReducers