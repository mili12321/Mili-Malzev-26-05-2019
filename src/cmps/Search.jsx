import React, { useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFavoriteCitys,updateCurrCity } from "../store/actions/cityActions";
import { weatherService } from "../services/weatherService";
import { useHistory } from "react-router-dom";
import { CityDataPreview } from "./CityDataPreview";
import { toast } from 'react-toastify';

export function Search() {

    const favoriteCitys = useSelector(state => state.city.favoriteCitys);    
    const themeState = useSelector(state => state.theme.themeState); 
 
    const [citysData, setCitysData] = useState([]);
    const dispatch = useDispatch()
    let history = useHistory();
    const inputRef = useRef()
 
    
    async function getAutoComplete(ev) {
        if( ev.target.value.length===0 ){
            setCitysData([]);
        }
        if(ev.target.value.length>2){
            try {
                const autoCompleteData = await weatherService.getAutoComplete(ev.target.value)
                    .then (data => data.json())
                    .then (data => {
                        return data
                    })
                setCitysData(autoCompleteData)
            } catch (error) {
                setCitysData([]);
                toast.error("Failed auto complete", { position: toast.POSITION.BOTTOM_LEFT })
                console.log('ERR in get citys from AutoComplete', error);
            }
        }
    }

    function getCurrentStyle(Key) {
        if(favoriteCitys&&favoriteCitys.length>0){
            const isIncludsCity = favoriteCitys.filter(city=>city.key===Key)[0]
            if(isIncludsCity){
                return 'includes'
            }
        }
    }

    function onToggleLocation(e,cityData) {
        const data = {
            name:cityData.LocalizedName,
            country:cityData.Country.LocalizedName,
            key:cityData.Key
        }
        e.preventDefault()
        e.stopPropagation()
        dispatch(updateFavoriteCitys(data)) 
    }    
    
    function onGetCityDetails(cityData) {
        const data = {
            name:cityData.LocalizedName,
            country:cityData.Country.LocalizedName,
            key:cityData.Key
        }

        dispatch(updateCurrCity(data)) 
        history.push(`/${data.name}`)
    }

    return (
        <div className='search flex column justify-center'>
            <div className="search-title">Search for city</div>
            <input 
            className={`search-input ${themeState?'dark':''}`}
            type="search"  
            ref={inputRef}
            onChange={getAutoComplete}
            placeholder='Enter at least 2 letters to start..'
            onKeyDown={(e)=>{
                var letters = /^[A-Za-z]+$/; 
                if (e.key.match(letters)) { 
                    return true; 
                } 
                else { 
                    e.preventDefault(); 
                } 
            }}
            />
            {citysData.length>0&&
                <div className="city-list-wrapper">
                    <div className={`city-list ${citysData.length>0?'full':''} ${themeState?'dark':''}`}>
                        <div className="city-list-scroll-wrapper">
                        {
                             citysData.map((cityData,idx)=>
                                <CityDataPreview
                                key={idx} 
                                cityData={cityData}
                                getCurrentStyle={getCurrentStyle}
                                onGetCityDetails={onGetCityDetails}
                                onToggleLocation={onToggleLocation}
                                favoriteCitys={favoriteCitys}
                                setCitysData={setCitysData}
                                inputRef={inputRef}
                                />
                             )
                        }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
