const LOAD_PAGE = 'feeds/LOAD_PAGE'
const SKIP_PAGE = 'feeds/SKIP_PAGE'

const initialState = {
    page: 1
}

const feedsReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOAD_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        case SKIP_PAGE:
            return {
                    ...state,
                    page: 1
            }
        default:
            return state
    }
}

const loadPage = () => ({type: LOAD_PAGE})
const skipPage = () => ({type: SKIP_PAGE})

export const loadNextPage = () => {
    return async (dispatch) => {
        dispatch(loadPage())
    }
}

export const skipPages = () => {
    return async (dispatch) => {
        dispatch(skipPage())
    }
}

export default feedsReducer