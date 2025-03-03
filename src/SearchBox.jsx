import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox ({updateInfo}){
    let [city ,setCity] = useState("");
    let [error , setError] = useState(false);
    let Api_URL = "https://api.openweathermap.org/data/2.5/weather?q";
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async()=>{
        try {
            let res = await fetch(`${Api_URL}=${city}&appid=${API_KEY}&units=metric`);
            let jsonRes = await res.json();
            let result = {
                city:city,
                temp :jsonRes.main.temp,
                tempMax:jsonRes.main.temp_max,
                tempMin:jsonRes.main.temp_min,
                Humidity : jsonRes.main.humidity,
                feelsLike :jsonRes.main.feels_like,
                Discriptions : jsonRes.weather[0].description,
            }; 
            console.log(result);
            return result;

        }catch(err){
            throw err;
        }
    }

    let heanderChange =(evt)=>{
        setCity(evt.target.value);
    };

    let heanderSub = async(evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setError(false);
            setCity("");
            let newResult = await getWeatherInfo();
            updateInfo(newResult);
        }catch (err){
            setError(true)
        };
    }

    return (
        <div className='SearchBox'>
            <form  onSubmit={heanderSub}>
                <TextField id="outlined-basic" label="City Name" required variant="outlined" value={city} onChange={heanderChange} /><br /> <br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p className="error-message">No such place exists in our API!</p>}
            </form>
        </div>
    )
}