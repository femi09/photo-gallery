import {combineReducers} from 'redux'
import authReducer from './auth'
import formReducer from './formReducer'
import imagesReducer from './images'
import profileReducer  from './profile'

const rootReducer = combineReducers({
 
    form: formReducer,
    auth: authReducer,
    images: imagesReducer, 
    profile: profileReducer
})
export default rootReducer