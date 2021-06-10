import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

export const NavbarDesktopBtn = ({innerText,pathName}) => {

    const themeState = useSelector(state => state.theme.themeState);

    return (
        <NavLink 
        className={`
        navlink-btn 
        desktop-view 
        margin-right-7px 
        ${themeState?'dark':''} 
        `} 
        to={pathName}>
            {innerText}
            <span></span><span></span><span></span><span></span>
        </NavLink>
    )
}
