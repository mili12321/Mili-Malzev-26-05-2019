import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { HeartBtnIcon } from "./buttons/HeartBtnIcon";

export function CityDataPreview({favoriteCitys,cityData,getCurrentStyle,onGetCityDetails,onToggleLocation,setCitysData,inputRef}) {

    const themeState = useSelector(state => state.theme.themeState); 
    const [isActive, setisActive] = useState(false)

    useEffect(() => {
        const isIncludsCity = favoriteCitys.filter(_city=>_city.key===cityData.Key)[0]
       if(isIncludsCity){
        setisActive(true)
       }else{
        setisActive(false)
       }
    }, [cityData,favoriteCitys])

    function onSetCitysData() {
        onGetCityDetails(cityData)
        setCitysData([])
        if(inputRef&&inputRef.current){
            inputRef.current.value=''
        }
    }

    return ( 
    <div className={`city-data-preview flex  place-center ${getCurrentStyle(cityData.Key)}`} onClick={onSetCitysData}>
       <div className={`flex search-name-result ${themeState?'dark':''}`}>
            <div className='margin-right-5px'>{cityData.LocalizedName}, </div>
            <div className='country'>{cityData.Country.LocalizedName}</div>
       </div>
        <div onClick={(e)=>{onToggleLocation(e,cityData)}}>
            <HeartBtnIcon isActive={isActive} size={'small'}/>
        </div>
    </div>
    )
}