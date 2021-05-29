const initialState = {
    favoriteCitys: [],
    currCity:{
        _id:'2154402',
        name:'Tel Aviv',
        country:'Israel',
        key:2154402
    }
}

export function cityReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_FAVORITE_CITYS':
            return {
                ...state,
                favoriteCitys: action.citys
            }
        case 'SET_CURRENT_CITY':
            return {
                ...state,
                currCity: action.city
            } 
        default:
            return state
    }
}