import React from 'react';
import './CitySelector.css';

function CitySelector({ cities, selectedCity, onCityClick }) {
  return (
    <div className="city-selector">
      <h2 className="sidebar-title">Colonies</h2>

      {}
      {cities.map((city) => (
        <button
          key={city.id}
          className={selectedCity.id === city.id ? 'city-btn active' : 'city-btn'}
          onClick={() => onCityClick(city)}
          style={{
            borderLeftColor: selectedCity.id === city.id ? city.theme : 'transparent',
          }}
        >
          <span className="city-btn-name">{city.name}</span>
          <span className="city-btn-region">{city.region}</span>
        </button>
      ))}
    </div>
  );
}

export default CitySelector;