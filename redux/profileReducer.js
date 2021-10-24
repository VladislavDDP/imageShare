

const LOAD_PHOTOS = 'feeds/LOAD_PHOTOS'

const initialState = {
    posts: []
}

const profileReducer = (state=initialState, action) => {
    
    switch(action.type) {
        case LOAD_PHOTOS:
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }

        default:
            return state
    }
}

export const addNewPost = (text) => ({type: LOAD_PHOTOS, text})

export const setUserProfile = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.setUserProfile(userId)
        dispatch(addNewPost(response))
    }
}

export default profileReducer