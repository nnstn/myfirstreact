import {createStore,combineReducers} from 'redux'

import count from './reducers/count'
import personList from './reducers/person'
const Allreducer=combineReducers({
    count,
    personList})
export default createStore(Allreducer)