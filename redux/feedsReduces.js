const LOAD_PAGE = 'feeds/LOAD_PAGE'

const initialState = {
    page: null
}

const feedsReducer = (state=initialState, action) => {
    
    switch(action.type) {
        case LOAD_PAGE:
            return {
                ...state,
                page: ++page
            }

        default:
            return state
    }
}

export const loadPage = (photos) => ({type: LOAD_PAGE, photos})

export const loadNextPage = () => {
    return async (dispatch) => {
        dispatch(loadPage())
    }
}

export default feedsReducer