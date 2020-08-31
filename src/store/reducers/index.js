import {combineReducers} from 'redux'
import photoReducer from './photoReducer'
import loadingReducer from './loadingReducer'
import errorReducer from './errorReducer'
import pageReducer from './pageReducer'
import formReducer from './formReducer'
import searchTermReducer from './searchTermReducer'
import clickedReducer from './clickedReducer'

const rootReducer = combineReducers({
    photos: photoReducer,
    isLoading: loadingReducer,
    error: errorReducer,
    page: pageReducer,
    searchTerm: searchTermReducer,
    clicked: clickedReducer,
    form: formReducer,
    
})
export default rootReducer