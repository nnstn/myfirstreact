import {createStore,combineReducers} from 'redux'

import count from './reducers/count'
import personList from './reducers/person'
const Allreducertt=combineReducers({
    count,
    personList})
export default createStore(Allreducertt)