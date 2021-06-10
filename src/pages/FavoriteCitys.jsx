import React from "react";
import { useSelector } from "react-redux";
import { FavoriteList } from "../cmps/FavoriteList";

export const FavoriteCitys = () => {

    const favoriteCitys = useSelector(state => state.city.favoriteCitys);    

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