import { combineReducers } from 'redux'
import  bugsReducer  from './bugs.reducer'
import  ressourceReducer from './ressources.reducer'

export default combineReducers({
    bugsReducer,
    ressourceReducer
})