import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const API_KEY = 'b01f1c37ac0036b041c535fcd73273a4';
    const CITY = 'Bengaluru'; 
    const COUNTRY_CODE = 'in'; 

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
        return <div className="alert alert-danger">{error}</div>;
    }

    if (!weather) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="weather-background">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-sm weather-card">
                            <div className="card-body">
                                <div className="blurred-bg"></div>
                                <h3 className="card-title text-center mb-4">Weather in {weather.name}</h3>
                                <p className="card-text stylish-text">Temperature: {weather.main.temp}°C</p>
                                <p className="card-text stylish-text">Condition: {weather.weather[0].description}</p>
                                <img className="weather-icon d-block mx-auto icon-hover" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;
