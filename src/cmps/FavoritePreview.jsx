import React, { useEffect,useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Temperature } from "./TemperaturePreview";
import { updateCurrCity,updateFavoriteCitys } from "../store/actions/cityActions";
import { useHistory } from "react-router-dom";
import { weatherService } from "../services/weatherService";
import { BsThreeDots,BsTrash } from "react-icons/bs";
import { getWeatherIcon } from "../utils/getWeatherIcons";
import { toast } from 'react-toastify';
import { Loader } from "../cmps/Loader";

export const FavoritePreview = ({city}) => {

    const themeState = useSelector(state => state.theme.themeState); 
    const [cityData, setCityData] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    let history = useHistory();
    const modalRef = useRef()

    useEffect(() => {
        try {
            async function fetchCurrentCityConditions() {   
                const response = await weatherService.getCurrentCityConditions(city.key).then (data => data.json()).then (data => {
                    return data[0]
                })
                if(response){
                    const currData = {
                        temperature:response.Temperature.Metric.Value,
                        realFeelTemperature:response.RealFeelTemperature.Metric.Value,
                        weatherText:response.WeatherText,
                        weatherIcon:response.WeatherIcon,
                        temperatureParams:[
                            {
                                name:'UV',
                                value:response.UVIndex,
                                unit: '/10'
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
                            }
                        ]
                    } 
                    setCityData(currData)
                }
            }
            fetchCurrentCityConditions();
        } catch (error) {
            toast.error("Failed getting current conditions", { position: toast.POSITION.BOTTOM_LEFT })
            console.log('ERR in getting fav city conditions', error);
        }
    }, [city.key])

    const onUpdateCurrCity = () => {
        dispatch(updateCurrCity(city))
        history.push(`/${city.name}`)
    }

    function onRemoveLocation(e) {
        e.preventDefault()
        e.stopPropagation()
        dispatch(updateFavoriteCitys(city)) 
        setIsOpen(false)
    }

    function onOpenModal() {
        setIsOpen(p=>!p)
    }

    useEffect(() => {
        if(isOpen){
            if(modalRef&&modalRef.current){
                modalRef.current.focus()
            }
        }
    }, [isOpen])

    if(!cityData)return <Loader/>
    return (
        <div className='weather-card-preview favorite flex column' onClick={onUpdateCurrCity}>
            <div className="position-relative options-container" >
                <div className={`options-btn-wrapper flex place-center ${isOpen?'active':''}`} onClick={(e)=>{
                        e.preventDefault()
                        e.stopPropagation()
                        onOpenModal()
                    }} >
                    <BsThreeDots/>
                </div>
                {isOpen&&<div 
                className="modal" 
                tabIndex="0" ref={modalRef} 
                onBlur={()=> setIsOpen(false)} 
                >
                    <div onClick={(e)=>onRemoveLocation(e)} className="delete-btn flex place-center"><div className='margin-right-5px'>Delete</div><BsTrash/></div>
                </div>}
            </div>
            <div className='flex space-between width-full'>
                <div className={`flex column favorite-location ${themeState?'dark':''}`}>
                    <div className='title-txt bold-600 space-nowrap'>{city.name},</div>
                    <div>{city.country}</div>
                </div>
                <div className="weather-icon-favorite">
                    <img src={getWeatherIcon(cityData.weatherIcon)} alt="" srcSet="" />   
                    <div className={`img-shadow-favorite ${themeState?"dark-theme":"light-theme"}`}></div>
                </div>
            </div>
            <div className='flex space-between width-full margin-t-20'>
                <div className={`curr-favorite-location-params flex`}>
                    {cityData.temperatureParams.map((param, idx)=>
                        <div key={idx} className='flex column param-wrapper justify-center'>
                            <div className='text-center fs14'>{param.name}</div>
                            <div className='text-center fs11'>{param.value}{param.unit}</div>
                        </div>
                    )} 
                </div>
                <div className='fs40 bold-700 favorite-temperature'><Temperature value={cityData.temperature}/></div>
            </div>
        </div>
    )
}
