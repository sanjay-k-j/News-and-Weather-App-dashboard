import React, { useState, useEffect } from 'react';
import axios from 'axios';
import weatherIcon from './img.png'; // Import the image file
import './Weather.css';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const API_KEY = 'b01f1c37ac0036b041c535fcd73273a4'; // Replace with your valid API key
    const CITY = 'Bengaluru'; // City name
    const COUNTRY_CODE = 'in'; // Country code

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY_CODE}&appid=${API_KEY}&units=metric`);
                setWeather(response.data);
            } catch (err) {
                setError('Failed to fetch weather data');
            }
        };

        fetchWeather();
    }, [API_KEY, CITY, COUNTRY_CODE]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!weather) {
        return <div>Loading...</div>;
    }

    return (
        <div className='weather_main_div'>
            <div className='name_temp'>
                <h3>{weather.name}</h3>
                <p>{weather.main.temp}°C</p>
            </div>
            <div className='icon_con'>
            <img src={weatherIcon} alt="Weather icon" className="weather-icon" style={{ width: '25px', height: '25px' }} />
            <p>{weather.weather[0].description}</p>
            </div>
        </div>
    );
};

export default Weather;
