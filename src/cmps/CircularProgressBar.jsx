import React from "react";
import { useSelector } from "react-redux";
import { getParamImg } from "../utils/getWeatherIcons";

export function CircularProgressBar({param}) {

    const themeState = useSelector(state => state.theme.themeState);  

    function getParamValue() {
        switch (true) {
            case param.name.includes('UV'):
                return  param.value*10
            case param.name.includes('Humidity'):
               return param.value       
            case param.name.includes('Wind'):
                return param.value       
            case param.name.includes('Precipitation'):
                return param.value       
            default:
                break;
        }
    }
    return (
        <div className="param-progress-bar width-fit flex column place-center">
            <div className="title-text flex"><div className='margin-right-7px'>{param.name}</div><div className="fs18">{getParamImg(param.name)}</div></div>
            <div className={`progress-circle ${getParamValue()>50?'over50':''}  p${getParamValue()} ${themeState?'dark':''}`}>
                <div className={`flex ${param.txt?'column':''}`}>
                    <span>{param.value}{param.unit}</span>
                </div>
                <div className="left-half-clipper">
                   <div className="first50-bar"></div>
                   <div className="value-bar"></div>
                </div>
            </div>
        </div>
    )
}
