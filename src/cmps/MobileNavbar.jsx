import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { VscHome, VscHeart } from "react-icons/vsc";
import { Loader } from "./Loader";

export const MobileNavbar = () => {
    const themeState = useSelector(state => state.theme.themeState); 
    const currCity = useSelector(state => state.city.currCity);

    if(!currCity) return <Loader/>
    return (
        <div className={`mobile-navbar ${themeState?'dark-theme':''}`}>
            <div className='flex space-around place-center inner-navbar-container'>
                <NavLink className={`navlink-btn flex place-center`} to={`/${currCity.name}`}>
                    <VscHome/>
                </NavLink>
                <NavLink className={`navlink-btn flex place-center`} to="/favorite">
                    <VscHeart/>
                </NavLink>
            </div>
        </div>
    )
}
