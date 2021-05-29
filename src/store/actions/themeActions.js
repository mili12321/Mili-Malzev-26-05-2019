import { themeService } from '../../services/themeService'
import { loading, doneLoading } from './systemActions';
import { toast } from 'react-toastify';

export function loadTheme() {
    return async dispatch => {
        try{
            dispatch(loading());
            const themeState = await themeService.query();
            dispatch({ type: 'SET_THEME', themeState })
        }catch(err){
            console.log('err in loading theme', err);
            toast.error('Unable to load  theme background color status', { position: toast.POSITION.BOTTOM_LEFT })
        }finally{
            dispatch(doneLoading());
        }
    }
}

export function updateTheme(themeState) {

  return async dispatch => {
      try{
          await themeService.save(themeState)
          dispatch({ type: 'SET_THEME', themeState})
      }catch(err){
          console.log('err in updating theme', err); 
          toast.error('Unable to update theme background color', { position: toast.POSITION.BOTTOM_LEFT })
      }
  }
}
