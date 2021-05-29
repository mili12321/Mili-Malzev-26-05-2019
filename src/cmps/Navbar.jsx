import React, { useEffect,useState } from "react";
import { NavLink,useLocation } from 'react-router-dom';
import { ThemeToggleBtn } from "./buttons/ThemeToggleBtn";
import { useSelector } from "react-redux";

export const Navbar = () => {

    const currCity = useSelector(state => state.city.currCity); //key
    const themeState = useSelector(state => state.theme.themeState);  
    const [offset, setOffset] = useState(0);
    const location = useLocation();

    const getWidth = () => window.innerWidth 
    || document.documentElement.clientWidth 
    || document.body.clientWidth;

    function useCurrentWidth() {
        // save current window width in the state object
        let [width, setWidth] = useState(getWidth());

        // in this case useEffect will execute only once because
        // it does not have any dependencies.
        useEffect(() => {
          const resizeListener = () => {
            // change width from the state object
            setWidth(getWidth())
          };
          // set resize listener
          window.addEventListener('resize', resizeListener);

          // clean up function
          return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
          }
        }, [])

        return width;
    }


    useEffect(() => {
      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
    }, []);
  

    return (
        <div className={`navbar ${offset>0?'scroll':''}`}>
            <div className='inner-navbar-container flex space-between'>
                <NavLink className='logo-wrapper flex place-center' to={`/${currCity.name}`}>
                    <span> Weather app </span>
                </NavLink>

                {useCurrentWidth()>599&&<div className={`flex place-center`}>
                    <NavLink className={`navlink-btn margin-right-7px ${themeState?'dark':''} ${location.pathname === '/'?'active':''}`} to={`/${currCity.name}`}>
                        home
                        <span></span><span></span><span></span><span></span>
                    </NavLink>
                    <NavLink className={`navlink-btn margin-right-7px ${themeState?'dark':''} ${location.pathname === '/favorite'?'active':''}`} to="/favorite">
                        favorite
                        <span></span><span></span><span></span><span></span>
                    </NavLink>
                    <ThemeToggleBtn/>
                </div>}
                {useCurrentWidth()<600&&<ThemeToggleBtn/>}
            </div>
        </div>
    )
}