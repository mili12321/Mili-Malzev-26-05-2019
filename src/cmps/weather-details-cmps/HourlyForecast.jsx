import React from "react";
import { useSelector } from "react-redux";
import { formatAMPM } from "../../utils/formatAMPM"
import { getWeatherIcon } from "../../utils/getWeatherIcons";
import { Temperature } from "../TemperaturePreview";

export const HourlyForecast = ({hourlyForecastData}) => { 
    const themeState = useSelector(state => state.theme.themeState);  
    return (
        <div className='hourly-forecast-wrapper'>
            <div className="bold-700 title-txt margin-bottom-10px">Today</div>
                <div className={`grid hourly-forecast-list width-full space-between ${themeState?'dark':''}`}>
                {
                    hourlyForecastData.map(
                        (hourDate,idx) =>
                        <div key={idx} className={`flex column place-center hourly-forecast-preview ${themeState?'dark':''}`}>
                           <div className="clr2">{formatAMPM(hourDate.DateTime)}</div>
                           <div className='icon-img flex place-center justify-center'>
                                <img src={getWeatherIcon(hourDate.WeatherIcon)} alt="" srcSet="" />   
                            </div>
                            <div className="flex place-baseline">
                                <div className="title-txt margin-right-5px">
                                    <Temperature currentTextSize={true} value={hourDate.Temperature.Value}/>
                                    </div>
                                <div className="fs11">
                                    <Temperature currentTextSize={true} value={hourDate.RealFeelTemperature.Value}/>
                                </div>
                            </div>
                           <div className={`text-center word-break ${themeState?'clr4':'clr6'}`}>{hourDate.IconPhrase}</div>
                        </div>
                    )
                }
                </div>
        </div>
    )
}
