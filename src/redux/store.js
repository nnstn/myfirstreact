import {createStore,combineReducers} from 'redux'

import count from './reducers/count'
import personList from './reducers/person'
const Allreducers=combineReducers({
    count,
    personList})
export default createStore(Allreducers)