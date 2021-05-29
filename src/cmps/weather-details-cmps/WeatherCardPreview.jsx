import React from "react";
import { useSelector } from "react-redux";
import { Temperature } from "../TemperaturePreview";
import { getWeatherIcon } from "../../utils/getWeatherIcons";

export const WeatherCardPreview = ({currentCityData}) => {
    
    const {weatherIcon,weatherText,temperature,realFeelTemperature} = currentCityData
    const themeState = useSelector(state => state.theme.themeState);  

    return (
       <div className='weather-card-preview flex'>
           <div className="weather-text bold-600 title-txt">{weatherText}</div>
           <div className="temperature-wrapper flex">
               <div className="current-temperature">
                    <Temperature value={temperature}/>
               </div>
               <div className="real-feel-temperature under-title-small-txt bold-600 ">
                    <span>Feels like </span>
                    <span className='real-feel-value'>
                        <Temperature value={realFeelTemperature} currentTextSize={true}/>
                    </span>
               </div>
           </div>
           <div className="weather-icon">
               <img src={getWeatherIcon(weatherIcon)} alt="" srcSet="" />   
               <div className={`img-shadow ${themeState?"dark-theme":"light-theme"}`}></div>
           </div>
       </div>
    )
}

