import { Alert } from "react-native"

const LOAD_PAGE = 'feeds/LOAD_PAGE'
const SKIP_PAGE = 'feeds/SKIP_PAGE'
const SET_PHOTOS = 'feeds/SET_PHOTOS'

const initialState = {
    page: 1,
    photos: []
}

type IAction = {
    type: string
}

const feedsReducer = (state=initialState, action: IAction | any) => {
    switch(action.type) {
        case LOAD_PAGE:
            return {
                ...state,
                page: state.page + 1
            }

        case SET_PHOTOS:
            return {
                ...state,
                page: action.page + 1,
                photos: [...state.photos, action.photos]
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
const setPhotos = (photos: any, page: number) => ({type: SET_PHOTOS, photos, page})
const skipPage = () => ({type: SKIP_PAGE})

export const loadPhotos = (page: number) => {
    return async (dispatch: any) => {
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=5`)
        const json = await response.json()
        const data = json.map((photo: any) => {
            return {id: photo.id, author: photo.author, download_url: photo.download_url}  
        })
        dispatch(setPhotos(data, page))
    }
}

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