// src/App.js
import React from 'react';
import Weather from './components/Weather';
import News from './components/News';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const App = () => {
    return (
        <div className="container">
            <h1 className="text-center mt-4 mb-4">Personal Dashboard</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 mb-4">
                    <Weather />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <News />
                </div>
            </div>
        </div>
    );
};

export default App;
