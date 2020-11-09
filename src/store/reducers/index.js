import {combineReducers} from 'redux'
import formReducer from './formReducer'
import imagesReducer from './images'

const rootReducer = combineReducers({
 
    form: formReducer,
    images: imagesReducer, 
})
export default rootReducer