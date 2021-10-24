import { feedsAPI } from "../API/api"

const LOAD_PHOTOS = 'feeds/LOAD_PHOTOS'

const initialState = {
    photos: []
}

const feedsReducer = (state=initialState, action) => {
    
    switch(action.type) {
        case LOAD_PHOTOS:
            return {
                ...state,
                photos: [...state.photos]
            }

        default:
            return state
    }
}

export const loadPhotos = (photos) => ({type: LOAD_PHOTOS, photos})

export const setFeedsPhotos = () => {
    return async (dispatch) => {
        const response = await feedsAPI.getPhotos()
        dispatch(loadPhotos(response))
    }
}

export default feedsReducer