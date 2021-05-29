import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTheme, updateTheme } from "../../store/actions/themeActions";

export function ThemeToggleBtn() {

    const themeState = useSelector(state => state.theme.themeState);  
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(loadTheme())
    }, [dispatch])

  
    return(
        <div className="wrapper">
            <div className="toggle">

                <input 
                className="toggle-input" 
                type="checkbox" 
                checked={themeState}
                onChange={()=>{
                    dispatch(updateTheme(!themeState))
                }}
                />

                <div className='toggle-bg'></div>
                <div className="toggle-switch ">
                    {themeState?
                        <img className='dark' src="https://img.icons8.com/office/25/000000/moon.png" alt=''/>
                        :
                        <img className='light' src="https://img.icons8.com/emoji/35/000000/sun-behind-small-cloud.png" alt=''/>
                    }
                </div>  
            </div>
        </div>
    )
}