import { storageService } from "./storageService"

const KEY = 'THEME_STATE';
let gThemeState;

export const themeService = {
    query,
    save
}

async function query() {
    gThemeState = await storageService.loadFromStorage(KEY)
    if(!gThemeState){
        gThemeState = false
        storageService.saveToStorage(KEY, gThemeState)
    }
    return gThemeState
}


function save(newThemeState) {
    gThemeState = newThemeState
    storageService.saveToStorage(KEY, gThemeState)
}

