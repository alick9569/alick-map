import fetch from '../core/fetch'

function getToken(params) {
    return fetch.post("/route", params)
}

function getRoute(params) {
    return fetch.get(`/route/${params}`)
}

export const MapService = {
    getToken,
    getRoute
}