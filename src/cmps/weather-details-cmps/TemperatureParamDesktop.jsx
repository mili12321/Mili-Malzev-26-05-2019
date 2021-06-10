import React from "react";
import { CircularProgressBar } from "../CircularProgressBar";

export const TemperatureParamDesktop = ({currentCityData}) => { 
    return (
        <div className='temperatureParams-desktop-wrapper flex'>
        {currentCityData.temperatureParams.map((param, idx)=>
            <CircularProgressBar key={idx} param={param}/>
        )}
       </div>
    )
}