const initialState = {
    temperatureScale: 'celsius'
}

export function temperatureScaleReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SCALE':
            return {
                ...state,
                temperatureScale: action.temperatureScale
            }
        default:
            return state
    }
}