import React from "react";
import {  useSelector } from "react-redux";
import { Temperature } from "../TemperaturePreview";
import {getForecastDayName, getForecastDate, getForecastDayNameShort} from "../../utils/getCurrentDate";
import { getWeatherIcon,getParamImg } from "../../utils/getWeatherIcons";
import {FaTemperatureHigh } from "react-icons/fa";

export const ForecastPreview = ({dailyForecast}) => {
    const themeState = useSelector(state => state.theme.themeState); 

    return (
        <div className={`card-type-2 ${themeState?'':'light-theme'} day-forecast-preview`} >

            <div className='desktop'>
                <div className='flex column place-center'>
                    <div className='flex column place-center'>
                        <div className={`flex column place-center ${themeState?'lightClr':''}`}>
                            <div className='title-txt'>
                                {getForecastDayName(dailyForecast.Date)}
                            </div>
                            <div className='fs11'>
                                {getForecastDate(dailyForecast.Date)}
                            </div>
                        </div>
                        <div className='day-icon'>
                            <img src={getWeatherIcon(dailyForecast.Day.Icon)} alt="" srcSet="" />   
                        </div>
                    </div>
                </div>
                <div  
                className={`weather-text title-txt text-center ${themeState?'lightClr':''}`} >
                    {dailyForecast.Day.ShortPhrase}
                </div>
                <div className="flex width-full space-evenly">
                    <div className='day-temperature max bold-700 fs30'>
                        <Temperature currentTextSize={true} value={dailyForecast.Temperature.Maximum.Value}/>
                    </div>
                    <div className='day-temperature min bold-700 fs30'>
                        <Temperature currentTextSize={true} value={dailyForecast.Temperature.Minimum.Value}/>
                    </div>
                </div>
                <div className="temperature-params forecast">
                    <div>
                        <span className='clr6 margin-right-5px'>
                            <span className="margin-right-5px">{ getParamImg('UV')}</span>
                            <span>UV:</span>
                        </span>
                        <span className={`${themeState?'clr4':'clr6'} `}>{dailyForecast.AirAndPollen[5].Value}/10</span>
                    </div>
                    <div>
                        <span className='clr6 margin-right-5px'>
                            <span className="margin-right-5px">{ getParamImg('Wind')}</span>
                            <span>Wind:</span>
                        </span>
                        <span className={`${themeState?'clr4':'clr6'} `}>{dailyForecast.Day.WindGust.Speed.Value} km/h</span>
                    </div>
                    <div>
                        <span className='clr6 margin-right-5px'>
                            <span className="margin-right-5px"><FaTemperatureHigh/></span><span>Real Feel:</span>
                        </span>
                        <span className={`${themeState?'clr4':'clr6'} `}> 
                            <Temperature currentTextSize={true} value={dailyForecast.RealFeelTemperature.Maximum.Value}/>
                        </span>
                    </div>
                    <div>
                        <span className='clr6 margin-right-5px'>
                            <span className="margin-right-5px">{ getParamImg('Liquid')}</span>
                            <span>Total Liquid:</span>
                        </span>
                        <span className={`${themeState?'clr4':'clr6'} `}>{dailyForecast.Day.TotalLiquid.Value} mm</span>
                    </div>
                </div>
            </div>

            <div className='mobile flex column place-center justify-center'>
                <div className='day-letter'>{getForecastDayNameShort(dailyForecast.Date)}</div>
                <div className='day-icon'>
                    <img src={getWeatherIcon(dailyForecast.Day.Icon)} alt="" srcSet="" />   
                </div>
                <div className='day-temperature bold-700'>
                    <Temperature value={dailyForecast.Temperature.Maximum.Value} currentTextSize={true}/>
                </div>
            </div>  
        </div>
    )
}
