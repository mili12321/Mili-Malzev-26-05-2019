import { storageService } from "./storageService"
import { toast } from 'react-toastify';

const KEY = 'CITYS';
let gCitys;

export const cityService = {
    query,
    getById,
    save
}


async function query() {
    gCitys = await storageService.loadFromStorage(KEY)
    if(!gCitys){
        gCitys = []
        storageService.saveToStorage(KEY, gCitys)
    }
    return gCitys
}


function getById(cityId) {
    if(gCitys){
        const city = gCitys.find(_city => _city._id === cityId)
        return Promise.resolve(city)
    }
}


function save(city) {
    const isIncludsCity = gCitys.filter(_city=>_city.key===city.key)[0]
    if(isIncludsCity){
        //remove
        _remove(city.key)
        toast.success(`${city.name} deleted from favorite list`, { position: toast.POSITION.BOTTOM_LEFT })
    }else{
        //add
        _add(city)
        toast.success(`${city.name} added to favorite list`, { position: toast.POSITION.BOTTOM_LEFT })
    }
    storageService.saveToStorage(KEY, gCitys)
    return gCitys
}


function _add(city) {
    const newCity = {
        _id:_makeid(),
        ...city
    }
    gCitys = [newCity, ...gCitys]
}

function _remove(key) {
    gCitys = gCitys.filter(_city=>
        _city.key !== key
    )
}


function _makeid(length = 7) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}