import { combineReducers } from 'redux';
import {systemReducer} from './systemReducer';
import { cityReducer } from './cityReducer';
import { themeReducer } from './themeReducer';
import { temperatureScaleReducer } from './temperatureScaleReducer';

const rootReducer = combineReducers({
  system: systemReducer,
  city: cityReducer,
  theme: themeReducer,
  temperatureScale: temperatureScaleReducer,
})

export default rootReducer;