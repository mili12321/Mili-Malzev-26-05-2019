import React from "react";
import { useSelector } from "react-redux";
import { getParamImg } from "../../utils/getWeatherIcons";

export const TemperatureParam = ({param}) => {
    const themeState = useSelector(state => state.theme.themeState); 
    return (
        <div className="temperature-param flex column">
            <div className={`card-type-2 flex place-center justify-center ${themeState?'dark-theme':''} temperature-value `}>
                <div className='icon mobile flex place-center justify-center'>
                   { getParamImg(param.name)}
                </div>
            </div>
            <div className={`fs12 bold-700 ${themeState?'dark-theme':''}`}>{param.value}{param.unit}</div>
        </div>
    )
}