import { GET_TOKEN, GET_ROUTE } from "../actions/MapAction"

const initialState = {
    error: null,
    token: null,
    status: null,
    payload: {}
}

const MapReducer = function (state = initialState, action) {
    switch(action.type) {
        case GET_TOKEN:
            return {...state, token: action.token}
        case GET_ROUTE:
            return {...state, payload: action.payload, status: action.status, error: action.error}
        default:
            return {...state}
    }
}

export default MapReducer