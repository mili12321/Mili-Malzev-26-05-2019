import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { updateCurrCity } from "../store/actions/cityActions";
import { Search } from "../cmps/Search";
import { WeatherCardPreview } from "../cmps/weather-details-cmps/WeatherCardPreview";
import { FavoriteBtn } from "../cmps/buttons/FavoriteBtn";
import { ForecastList } from "../cmps/weather-details-cmps/ForecastList";
import { weatherService } from "../services/weatherService";
import { getCurrentDate } from '../utils/getCurrentDate'
import { getParamImg,getWeatherIcon } from "../utils/getWeatherIcons";
import { TemperatureConversionBtn } from "../cmps/buttons/TemperatureConversionBtn";
import { Temperature } from "../cmps/TemperaturePreview";
import { CircularProgressBar } from "../cmps/CircularProgressBar";
import { formatAMPM } from "../utils/formatAMPM"
import { toast } from 'react-toastify';
import { Loader } from "../cmps/Loader";

export const WeatherDetails = () => {
 
    const currCity = useSelector(state => state.city.currCity);

    const [currentCityData, setCurrentCityData] = useState(null)
    const [dailyForecastsData, setDailyForecastsData] = useState([])
    const [hourlyForecastData, setHourlyForecatsData] = useState([])
    const [status, setStatus] = useState(null)

    const dispatch = useDispatch()
    let history = useHistory();
    const location = useLocation();

    function getCurrLocaion() {
        try {
            function success(position) {
                const latitude  = position.coords.latitude;
                const longitude = position.coords.longitude;
                setStatus(`${latitude},${longitude}`);
              }
          
              function error() {
                setStatus(null);
                  toast.error('Unable to retrieve your location', { position: toast.POSITION.BOTTOM_LEFT })
                  if(location.pathname === '/'&&currCity){
                      history.push(`/${currCity.name}`)
                  }
              }
          
              if(!navigator.geolocation) {
                setStatus(null);
                toast.error('Geolocation is not supported by your browser', { position: toast.POSITION.BOTTOM_LEFT })
              } else {
                navigator.geolocation.getCurrentPosition(success, error);
              }
          
        } catch (error) {
            const watchId = navigator.geolocation.watchPosition(position => {
                setStatus(`${position.coords.latitude},${position.coords.longitude}`);
            });
        }
    }


    useEffect(() => {
        if(status){
            getLocation()
        }
        function getLocation() {
            if(status){
                async function fetchCurrentLocation() {
                    const response = await weatherService.getCurrLocation(status).then(data => data.json()).then(data => {
                        return data
                    })    
                    const city  =  {
                        _id: `${response.Key}`,
                        name:response.LocalizedName,
                        key:parseInt(response.Key),
                        country:response.Country.LocalizedName
                    }
                    dispatch(updateCurrCity(city))
                    history.push(`/${city.name}`)      
                }
                fetchCurrentLocation()
            }
        }
    }, [status,history,dispatch])


    useEffect(() => {
        if(location.pathname === '/'){
            try {
                getCurrLocaion() 
            } catch (error) {
                toast.error("Failed to get location", { position: toast.POSITION.BOTTOM_LEFT })
            }
        }else{
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
    }, []); 

    

    if(!currentCityData&&dailyForecastsData.length===0&&hourlyForecastData.length===0) return <Loader/>
    return (
       <div className="weather-details">
            <div className="desktop-search"><Search/></div>

            <div className="inner-container">
                <div className='current-details-section'>

                    <div className='flex space-between full'>
                        <Location currCity={currCity}/>

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

const Location = ({currCity}) => {
    return (
        <div className="location flex column">
            <div className='city bold-800 title-txt'>{currCity.name},</div>
            <div className='country bold-800 title-txt'>{currCity.country}</div>
            <div className='date under-title-small-txt'>{getCurrentDate()}</div>
        </div>
    )
}
const TemperatureParam = ({param}) => {
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
const TemperatureParamDesktop = ({currentCityData}) => { 
    return (
        <div className='temperatureParams-desktop-wrapper flex'>
        {currentCityData.temperatureParams.map((param, idx)=>
            <CircularProgressBar key={idx} param={param}/>
        )}
       </div>
    )
}
const HourlyForecast = ({hourlyForecastData}) => { 
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
