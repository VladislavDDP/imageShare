const LOAD_PAGE = 'feeds/LOAD_PAGE'
const SKIP_PAGE = 'feeds/SKIP_PAGE'

const initialState = {
    page: 1
}

type IAction = {
    type: string
}

const feedsReducer = (state=initialState, action: IAction) => {
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
    return async (dispatch: Function) => {
        dispatch(loadPage())
    }
}

export const skipPages = () => {
    return async (dispatch: Function) => {
        dispatch(skipPage())
    }
}

export default feedsReducer