import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Search } from "../cmps/Search";
import { WeatherCardPreview } from "../cmps/weather-details-cmps/WeatherCardPreview";
import { FavoriteBtn } from "../cmps/buttons/FavoriteBtn";
import { ForecastList } from "../cmps/weather-details-cmps/ForecastList";
import { weatherService } from "../services/weatherService";
import { TemperatureConversionBtn } from "../cmps/buttons/TemperatureConversionBtn";
import { toast } from 'react-toastify';
import { Loader } from "../cmps/Loader";
import { Location } from "../cmps/weather-details-cmps/Location";
import { TemperatureParam } from "../cmps/weather-details-cmps/TemperatureParam";
import { TemperatureParamDesktop } from "../cmps/weather-details-cmps/TemperatureParamDesktop";
import { HourlyForecast } from "../cmps/weather-details-cmps/HourlyForecast";

export const WeatherDetails = () => {
 
    const currCity = useSelector(state => state.city.currCity);

    const [currentCityData, setCurrentCityData] = useState(null)
    const [dailyForecastsData, setDailyForecastsData] = useState([])
    const [hourlyForecastData, setHourlyForecatsData] = useState([])

    const location = useLocation();

    useEffect(() => {
        if(currCity){
            try {
                async function fetchCurrentCityConditions() {    
                    const response = await weatherService.getCurrentCityConditions(currCity.key).then (data => data.json()).then (data => {
                        return data[0]
                    })  
                    let cityData
                    if(response){
                        cityData = {
                            weatherText:response.WeatherText,
                            weatherIcon:response.WeatherIcon,
                            temperature:response.Temperature.Metric.Value,
                            realFeelTemperature:response.RealFeelTemperature.Metric.Value,
                            temperatureParams:[
                                {
                                    name:'UV Index',
                                    value:response.UVIndex,
                                    unit: '/10',
                                    txt:response.UVIndexText
                                },
                                {
                                    name:'Humidity',
                                    value: response.RelativeHumidity,
                                    unit: '%'
                                },
                                {
                                    name:'Wind Gust',
                                    value:response.WindGust.Speed.Metric.Value,
                                    unit: 'km/h'
                                },
                                {
                                    name:'Precipitation',
                                    value:response.PrecipitationSummary.Precipitation.Metric.Value,
                                    unit: response.PrecipitationSummary.Precipitation.Metric.Unit
                                }
                            ]
                        };
                    }             
                    setCurrentCityData(cityData)
                }
                fetchCurrentCityConditions();
            } catch (error) {
                toast.error("Failed to fetch current conditions", { position: toast.POSITION.BOTTOM_LEFT })
                console.log('ERR in getting current city conditions', error);
            }

            try {
                async function fetchDailyForecast() {                   
                    const response = await weatherService.getForecastFromCity(currCity.key).then (data => data.json()).then (data => {
                       return data.DailyForecasts
                    })
                    setDailyForecastsData(response)
               }
               fetchDailyForecast(); 
            } catch (error) {
                toast.error("Failed to fetch daily forecast", { position: toast.POSITION.BOTTOM_LEFT })
                console.log('ERR in getting daily forecast', error);
            }

            try {
                async function fetchHourlyForecast() {                   
                    const response = await weatherService.getHourlyFrecast(currCity.key).then (data => data.json()).then (data => {
                        return data
                     })
                    setHourlyForecatsData(response)
                }
                fetchHourlyForecast(); 
            } catch (error) {
                toast.error("Failed to fetch hourly forecast", { position: toast.POSITION.BOTTOM_LEFT })
                console.log('ERR in getting hourly forecast', error);
            }
        }
        return () => {
            setCurrentCityData(null)
            setDailyForecastsData([])
            setHourlyForecatsData([])
        }
    }, [currCity,location.pathname]); 

    

    if(!currCity||!currentCityData||dailyForecastsData.length===0||hourlyForecastData.length===0) return <Loader/>
    return (
       <div className="weather-details">
            <div className="desktop-search"><Search/></div>

            <div className="inner-container">
                <div className='current-details-section'>

                    <div className='flex space-between full'>
                        <Location/>

                        <TemperatureParamDesktop currentCityData={currentCityData}/>

                        <FavoriteBtn currCity={currCity}/>
                    </div>
                    <div className="current-conditions-container">
                        <WeatherCardPreview
                        currentCityData={currentCityData}
                        />

                    {currentCityData.temperatureParams&&
                       <div className="flex space-evenly temperature-params">
                           {currentCityData.temperatureParams.map((param, idx)=>
                                <TemperatureParam key={idx} param={param}/>
                            )}
                       </div>
                    }

                    </div>
                </div>

                <TemperatureConversionBtn/>
                
                <HourlyForecast hourlyForecastData={hourlyForecastData}/>
                
                <ForecastList dailyForecastsData={dailyForecastsData}/>
                
            </div>
       </div>
    )
}
