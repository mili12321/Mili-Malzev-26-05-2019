import React, { useEffect,useState } from "react";
import { NavLink } from 'react-router-dom';
import { ThemeToggleBtn } from "./buttons/ThemeToggleBtn";
import { useSelector } from "react-redux";
import { Loader } from "./Loader";
import { NavbarDesktopBtn } from "./buttons/NavbarDesktopBtn";

export const Navbar = () => {

    const currCity = useSelector(state => state.city.currCity); //key
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
    }, []);
  
    if(!currCity) return <Loader/>
    return (
        <div className={`navbar ${offset>0?'scroll':''}`}>
            <div className='inner-navbar-container flex space-between'>
                <NavLink className='logo-wrapper flex place-center' to={`/${currCity.name}`}>
                    <span> Weather app </span>
                </NavLink>

                <div className={`flex place-center`}>
                    <NavbarDesktopBtn innerText={'home'} pathName={`/${currCity.name}`}/>
                    <NavbarDesktopBtn innerText={'favorite'} pathName={'/favorite'}/>
                    <ThemeToggleBtn/>
                </div>

            </div>
        </div>
    )
}