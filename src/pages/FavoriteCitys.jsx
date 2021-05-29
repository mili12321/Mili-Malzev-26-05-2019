import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteList } from "../cmps/FavoriteList";
import { loadFavoriteCitys } from "../store/actions/cityActions";
import { Loader } from "../cmps/Loader";

export const FavoriteCitys = () => {

    const favoriteCitys = useSelector(state => state.city.favoriteCitys);    
    const currCity = useSelector(state => state.city.currCity); 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadFavoriteCitys())
    }, [dispatch])

    if(favoriteCitys.length===0&&!currCity) return <Loader/>
    return (
        <div className='favorite-page flex place-center column'>
            <div className="title bold-800 title-txt margin-bottom-30px">Favorite Locations</div>
            {
               favoriteCitys.length>0?
               <FavoriteList favoriteCitys={favoriteCitys}/>
               : 
               <div className=" bold-700 title-txt">No favorite citys</div>
            }
        </div>
    )
}