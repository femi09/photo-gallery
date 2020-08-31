import {LOAD_PHOTOS_SUCCESS, PHOTOS_SEARCH_SUCCESS} from '../constants'

const photoReducer = (photos=[], action) => {
    switch(action.type) {
        case LOAD_PHOTOS_SUCCESS:
        return [...photos, ...action.photos]
        case PHOTOS_SEARCH_SUCCESS:
        return [...action.photos]
        default: 
        return photos
    }
    

}

export default photoReducer