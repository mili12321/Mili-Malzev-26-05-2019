import React from "react";
import { useSelector } from "react-redux";
import { getCurrentDate } from '../../utils/getCurrentDate'

export const Location = () => {

    const currCity = useSelector(state => state.city.currCity);
    return (
        <div className="location flex column">
            <div className='city bold-800 title-txt'>{currCity.name},</div>
            <div className='country bold-800 title-txt'>{currCity.country}</div>
            <div className='date under-title-small-txt'>{getCurrentDate()}</div>
        </div>
    )
}