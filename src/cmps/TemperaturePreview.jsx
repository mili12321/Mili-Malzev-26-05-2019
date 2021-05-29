import React from "react";
import { useSelector } from "react-redux";

export const Temperature = ({value,currentTextSize}) => {

    const temperatureScale = useSelector(state => state.temperatureScale.temperatureScale);  

    function convertToF(celsius) {
        let fahrenheit = (celsius * 9/5) + 32;
        return fahrenheit
    }
  
    return (
        <>
            <span className='temperature-value'>
                { temperatureScale==='celsius'&& Math.round(value) }
                { temperatureScale==='fahrenheit'&& Math.round(convertToF(value)) }
            </span> 
            <span className='temperature-unit'>
                { temperatureScale==='celsius'&& <>&#176;</> }
                { temperatureScale==='fahrenheit'&& <span className={`${currentTextSize?'':'fs-for-temp-scale'}`}>&#8457;</span> }
            </span>
        </>
    )
}
