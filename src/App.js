import React from 'react';
import Weather from './components/Weather';
import News from './components/News';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const App = () => {
    return (
        <div className="container">
            <h1>Personal Dashboard</h1>
            <div className="row">
                <div className="col-md-6">
                    <Weather />
                </div>
                <div className="col-md-6">
                    <News />
                </div>
            </div>
        </div>
    );
};

export default App;
