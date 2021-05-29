import React from "react";
import { useSelector } from "react-redux";
import { NavLink,useLocation } from 'react-router-dom';
import { VscHome, VscHeart } from "react-icons/vsc";

export const MobileNavbar = () => {
    const themeState = useSelector(state => state.theme.themeState); 
    const location = useLocation();

    return (
        <div className={`mobile-navbar ${themeState?'dark-theme':''}`}>
            <div className='flex space-around place-center inner-navbar-container'>
                <NavLink className={`navlink-btn flex place-center ${location.pathname === '/'?'active':''}`} to="/">
                    <VscHome/>
                </NavLink>
                <NavLink className={`navlink-btn flex place-center ${location.pathname === '/favorite'?'active':''}`} to="/favorite">
                    <VscHeart/>
                </NavLink>
            </div>
        </div>
    )
}
