import React from "react";
import { ForecastPreview } from "./ForecastPreview";

export const ForecastList = ({dailyForecastsData}) => {

    return (
        <div>
            <div className="bold-700 title-txt">Next 5 Days</div>
            <div className='daily-forecasts'>
                {
                    dailyForecastsData.map( (dailyForecast,idx)=> 
                        <ForecastPreview key={idx} day={'M'} dailyForecast={dailyForecast}/>
                    )
                }
            </div>
        </div>
    )
}