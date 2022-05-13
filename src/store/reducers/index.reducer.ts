import { combineReducers } from 'redux'
import  bugsReducer  from './bugs.reducer'
import  ressourceReducer from './ressources.reducer'
import commentsReducer from "./comments.reducer";

export default combineReducers({
    bugsReducer,
    ressourceReducer,
    commentsReducer
})