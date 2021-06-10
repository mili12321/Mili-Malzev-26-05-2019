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
import { loadFavoriteCitys,updateCurrCity } from "./store/actions/cityActions";
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import { weatherService } from "./services/weatherService";

export function App() {

  const themeState = useSelector(state => state.theme.themeState);  
  const currCity = useSelector(state => state.city.currCity);
  let history = useHistory();
  const dispatch = useDispatch()
  const location = useLocation();

  useEffect(() => {
      dispatch(loadTheme())
  }, [dispatch])

  useEffect(() => {
    dispatch(loadFavoriteCitys())
  }, [dispatch])

  useEffect(() => {
    if(location.pathname === '/'&&currCity){
      history.push(`/${currCity.name}`)
    }
  }, [currCity,location.pathname,history])

  useEffect(() => {
    if(!currCity){
        function success(position) {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            getLocation(`${latitude},${longitude}`)
        }
      
        function error() {
            toast.error('Unable to retrieve your location', { position: toast.POSITION.BOTTOM_LEFT })
            getDefaultCity()
        }
      
        if(!navigator.geolocation) {
          toast.error('Geolocation is not supported by your browser', { position: toast.POSITION.BOTTOM_LEFT })
          getDefaultCity()
        } else {
          navigator.geolocation.getCurrentPosition(success, error);
        }
      
    }
    function getDefaultCity() {
      const defaultCity = {
        _id:'2154402',
        name:'Tel Aviv',
        country:'Israel',
        key:2154402
      }
      dispatch(updateCurrCity(defaultCity))
      if(location.pathname !== '/favorite'){
          history.push(`/${defaultCity.name}`)
      }
    }
    function getLocation(status) {
        async function fetchCurrentLocation() {
            const response = await weatherService.getCurrLocation(status).then(data => data.json()).then(data => {
                return data
            })    
            const city  =  {
                _id: `${response.Key}`,
                name:response.LocalizedName,
                key:parseInt(response.Key),
                country:response.Country.LocalizedName
            }
            dispatch(updateCurrCity(city))
            if(location.pathname !== '/favorite'){
              history.push(`/${city.name}`)     
            }
        }
        fetchCurrentLocation()
    }
  }, [currCity,history,location.pathname,dispatch])

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

