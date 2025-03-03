import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import "./WeatherApp.css"
import { useState } from 'react'
export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city:"Delhi",
        temp: 16.05,
        tempMax:16.05,
        tempMin: 16.05,
        Discriptions: "haze",
        Humidity: 63,
        feelsLike:15.36,
    });
    let updateInfo = (result) =>{
        setWeatherInfo(result);
    };
    return (
        <div className='WeatherApp'>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info = {weatherInfo} />
        </div>
    )
}