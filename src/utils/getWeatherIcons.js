import {RiWindyLine} from 'react-icons/ri'
import {WiHumidity} from 'react-icons/wi'
import {BiSun} from 'react-icons/bi'
import {GiDroplets} from 'react-icons/gi'

export function getWeatherIcon(weatherIcon){
    switch (weatherIcon) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199308/OIH57D1.eps_crop__1_-removebg-preview_g3qwv5.png";  
        case 6:
        case 7:
        case 8:
        case 19:
        case 20:
        case 38:
        case 43:
            return "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199333/OIH57D1.eps_crop__2_-removebg-preview_oclptj.png";  
        case 11:
            return "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199333/OIH57D1.eps_crop__2_-removebg-preview_oclptj.png"; 
        case 12:
            return "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199371/OIH57D1.eps_crop__4_-removebg-preview_gnl9n6.png"; 
        case 13:
        case 14:
        case 39:
        case 40:
            return "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199391/OIH57D1.eps_crop__3_-removebg-preview_eicsqk.png";  
        case 15:
        case 16:
        case 17:
        case 41:
        case 42:
            return "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622039606/OIH57D1.eps_crop-removebg-preview_dx3n3o.png"; 
        case 18:
        case 25:
        case 26:
            return "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199420/OIH57D1.eps_crop__5_-removebg-preview_nazxov.png"; 
        case 22:
        case 29:
            return "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199442/OIH57D1.eps_crop__7_-removebg-preview_ow6llf.png"; 
        case 23:
        case 44:
            return "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199464/OIH57D1.eps_crop__6_-removebg-preview_meirie.png"; 
        case 24:
            return "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199478/OIH57D1.eps_crop__13_-removebg-preview_ilfsnl.png";  
        case 30:
            return "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199496/OIH57D1.eps_crop__12_-removebg-preview_tiqmlu.png"; 
        case 31:
            return "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199496/OIH57D1.eps_crop__12_-removebg-preview_tiqmlu.png";
        case 32:
            return "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199523/OIH57D1.eps_crop__15_-removebg-preview_lw0ij6.png"; 
            // return "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199544/OIH57D1.eps_crop__14_-removebg-preview_wkh9ec.png";   
        case 33:
        case 34:
            return "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199561/OIH57D1.eps_crop__11_-removebg-preview_ywo1lm.png"  
        case 35:
        case 36:
        case 37:
            return "https://res.cloudinary.com/dzvebcsrp/image/upload/v1622199575/OIH57D1.eps_crop__9_-removebg-preview_beblpw.png";
        default:
            break;
    }
}

export function getParamImg(paramName) {
    switch (true) {
        case paramName.includes('UV'):
            return <BiSun/>
        case paramName.includes('Humidity'):
           return <WiHumidity/>       
        case paramName.includes('Wind'):
           return <RiWindyLine/>
        case paramName.includes('Precipitation'):
        case paramName.includes('Liquid'):
           return <GiDroplets/>
        default:
            break;
    }
}