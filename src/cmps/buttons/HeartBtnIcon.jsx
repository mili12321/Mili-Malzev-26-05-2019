import React from "react";

export const HeartBtnIcon = ({isActive,size}) => {

    return (
        <div 
        className={`heart ${isActive?'active':''}`}
        >
            <div className={`heart-flip ${size?size:''}`}></div>
        </div>
    )
}