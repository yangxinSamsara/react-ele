import { createStore } from 'redux'
import allReducers from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

let store = createStore(allReducers, composeWithDevTools())
export default store