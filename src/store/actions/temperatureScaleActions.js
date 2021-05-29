import { toast } from 'react-toastify';

export function updateTemperatureScale(temperatureScale) {
  return async dispatch => {
      try{
          dispatch({ type: 'SET_SCALE', temperatureScale})
      }catch(err){
          console.log('err in updating temperature scale', err); 
          toast.error('Unable to update temperature scale', { position: toast.POSITION.BOTTOM_LEFT })
      }
  }
}
