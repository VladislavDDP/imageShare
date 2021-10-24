const SET_PROFILE = 'feeds/SET_PROFILE'

const initialState = {
    first_name: null,
    email: null,
    avatar: null
}

const profileReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_PROFILE:
            return {
                ...state,
                first_name: action.first_name,
                email: action.email,
                avatar: action.avatar
            }

        default:
            return state
    }
}

export const setProfile = ({email, first_name, avatar}) => (
    {type: SET_PROFILE, email: email, first_name: first_name, avatar: avatar}
)

export const setUserProfile = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.setUserProfile(userId)
        dispatch(setProfile(response.data))
    }
}

export default profileReducer