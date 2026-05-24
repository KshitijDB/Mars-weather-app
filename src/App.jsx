import React, { useState } from 'react';
import CitySelector from './components/CitySelector';
import Dashboard from './components/Dashboard';
import citiesData from './db.json';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(citiesData[0]);

  function handleCityClick(city) {
    setSelectedCity(city);
  }

  return (
    <div className="app">
      <h1 className="app-title">   Mars Weather App</h1>

      <div className="app-body">
        {}
        <CitySelector
          cities={citiesData}
          selectedCity={selectedCity}
          onCityClick={handleCityClick}
        />

        {}
        <Dashboard selectedCity={selectedCity} />
      </div>
    </div>
  );
}

export default App;