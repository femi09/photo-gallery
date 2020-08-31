import {PHOTOS_SEARCH} from '../constants'

const searchTermReducer = (searchTerm = "", action) => {
    switch(action.type) {
        case PHOTOS_SEARCH:
        return action.searchTerm
        default: 
        return searchTerm
    }
    

}

export default searchTermReducer