import { combineReducers } from 'redux'
import userReducer from './user'
import questionsReducer from './questions'

const AllReducers = combineReducers({
  userReducer,
  questionsReducer
})

export default AllReducers
