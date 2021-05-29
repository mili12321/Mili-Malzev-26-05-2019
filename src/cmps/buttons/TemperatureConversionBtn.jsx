import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTemperatureScale } from "../../store/actions/temperatureScaleActions";

export function TemperatureConversionBtn() {

    const temperatureScale = useSelector(state => state.temperatureScale.temperatureScale);  
    const themeState = useSelector(state => state.theme.themeState);  
    const dispatch = useDispatch()

    function onUpdateTemperatureScale() {
        if(temperatureScale==='celsius'){
            dispatch(updateTemperatureScale('fahrenheit'))
        }else{
            dispatch(updateTemperatureScale('celsius'))
        }
    }
    
    return(
        <div className="conversion-btn-wrapper width-full flex">
            <input 
            type="checkbox" 
            className={`temperature-conversion-btn ${themeState?'dark':''}`}
            onChange={onUpdateTemperatureScale}
            checked={temperatureScale!=='celsius'?true:false}
            >   
            </input>
        </div>
    )
}