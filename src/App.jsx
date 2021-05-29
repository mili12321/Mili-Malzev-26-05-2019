import React, { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import {routes} from './routes.js'
import { Navbar } from './cmps/Navbar'
import { MobileNavbar } from './cmps/MobileNavbar'
import { loadTheme } from "./store/actions/themeActions";

export function App() {

  const themeState = useSelector(state => state.theme.themeState);  
  const dispatch = useDispatch()
  const location = useLocation();

  useEffect(() => {
      dispatch(loadTheme())
  }, [dispatch])

  return (
    <div className={`App ${themeState?location.pathname === '/favorite'?'dark-desktop-favorite-page-view':'dark':location.pathname === '/favorite'?'light-desktop-favorite-page-view':'light'}`}>
      <Navbar/>
      <Switch>
        { routes.map(route => <Route key={ route.path } exact component={ route.component } path={ route.path } />) }
      </Switch>
      <MobileNavbar/>
      <ToastContainer />
    </div>
  )
}

