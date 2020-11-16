import {combineReducers} from 'redux'
import authReducer from './auth'
import formReducer from './formReducer'
import imagesReducer from './images'

const rootReducer = combineReducers({
 
    form: formReducer,
    auth: authReducer,
    images: imagesReducer, 
})
export default rootReducer