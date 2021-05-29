import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFavoriteCitys } from "../../store/actions/cityActions";
import { HeartBtnIcon } from "./HeartBtnIcon";
export const FavoriteBtn = ({currCity}) => {

    const favoriteCitys = useSelector(state => state.city.favoriteCitys);    
    const [isActive, setisActive] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const isIncludsCity = favoriteCitys.filter(_city=>_city.key===currCity.key)[0]
       if(isIncludsCity){
        setisActive(true)
       }else{
        setisActive(false)
       }
    }, [currCity,favoriteCitys])

    function onUpdateFavoriteList() {
         //favoriteCitys updated and updates the isActive value
        dispatch(updateFavoriteCitys(currCity)) 
    }

    return (
        <div 
        className='favorite-btn'
        onClick={onUpdateFavoriteList}
        >
            <div className="desktop-view-btn">
                <HeartButtonText isActive={isActive}/>
            </div>
            <div className='mobile-view-btn'>
                <HeartBtnIcon isActive={isActive}/>
            </div>
        </div>
    )
}

const HeartButtonText = ({isActive}) => {

    return (
        <div 
        className={`heart-button ${isActive?'active':''}`}
        >
            <div className="heart-flip"></div>
            <span>{isActive?'Added to':'Add to'} favorite</span>
        </div>
    )
}

