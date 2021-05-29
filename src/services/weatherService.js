const API_KEY = 'dQHOTCFaKUypFNgNLtO5SXWaOhxfK4Ya'

export const weatherService = {
    getAutoComplete,
    getCurrentCityConditions,
    getForecastFromCity,
    getCurrLocation,
    getHourlyFrecast
}

async function getCurrLocation(status) {
    const res =  fetch(
        `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${status}`
    )
    return res
}

function getHourlyFrecast(cityKey) {
    const res =  fetch(
        `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=${API_KEY}&details=true&metric=true`
    )
    return res
}

async function getForecastFromCity(cityKey) {
   const res = fetch(
        `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&details=true&metric=true`
    )
    return res
}

async function getCurrentCityConditions(cityKey) {
    const res = fetch(
        `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}&details=true`
    )
    return res
}

function getAutoComplete(query) {
    const res = fetch(
        `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`
    )
    return res
}

