const initialState = {
    themeState: false
}

export function themeReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                themeState: action.themeState
            }
        default:
            return state
    }
}