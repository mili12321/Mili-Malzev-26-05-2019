import React from "react";
import { FavoritePreview } from "./FavoritePreview"

export const FavoriteList = ({favoriteCitys}) => {

    return (
       <div className="favorite-list inner-container ">
           {favoriteCitys.map((city,idx)=>
                <FavoritePreview key={idx} city={city}/>
            )}
       </div>
    )
}