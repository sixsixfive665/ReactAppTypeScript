import { createStore, combineReducers } from 'redux'
import configReducer from './modules/config'
const allReducers = {
  config: configReducer
}
const rootReducer = combineReducers(allReducers)
let store = createStore(rootReducer)
export default store