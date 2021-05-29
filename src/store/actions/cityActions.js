import { cityService } from '../../services/cityService'
import { loading, doneLoading } from './systemActions';
import { toast } from 'react-toastify';

export function loadFavoriteCitys() {
  
    return async dispatch => {
        try{
            dispatch(loading());
            const citys = await cityService.query();
            dispatch({ type: 'SET_FAVORITE_CITYS', citys })
        }catch(err){
            console.log('err in loading citys', err);
            toast.error('Unable to loade citys', { position: toast.POSITION.BOTTOM_LEFT })
        }finally{
            dispatch(doneLoading());
        }
    }
}

export function updateFavoriteCitys(city) {
  return async dispatch => {
      try{
        const citys = await cityService.save(city)
        dispatch({ type: 'SET_FAVORITE_CITYS', citys})
      }catch(err){
        toast.error('Unable to update fav citys', { position: toast.POSITION.BOTTOM_LEFT })
        console.log('err in updating citys', err); 
      }
  }
}


export function updateCurrCity(city) {//with geolocatin 

  return async dispatch => {
      try{
          dispatch({ type: 'SET_CURRENT_CITY', city})
      }catch(err){
          console.log('err in updating city', err); 
          toast.error('Unable to update city', { position: toast.POSITION.BOTTOM_LEFT })
      }
  }
}




