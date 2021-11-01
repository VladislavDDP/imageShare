import { Alert } from "react-native"
import { darkTheme } from "../theme"
const SWITCH_THEME = 'SWITCH_THEME'

const initialState = {
    theme: darkTheme
}

type IAction = {
    type: string
    theme: string
}

const themeReducer = (state=initialState, action: IAction) => {
    switch (action.type) {
        case SWITCH_THEME: 
            return { theme: action.theme }
        default: 
            return state

    }
}

export const switchTheme = (theme: any) => {
    return (dispatch: Function) => {
        dispatch({type: SWITCH_THEME, theme})
    }
}

export default themeReducer