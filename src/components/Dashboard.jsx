import React from 'react';
import './Dashboard.css';

function getDustColor(dustLevel) {
  if (dustLevel === 'Low') return 'green';
  if (dustLevel === 'Moderate') return 'orange';
  if (dustLevel === 'High') return 'red';
  if (dustLevel === 'Extreme') return 'purple';
  return 'gray';
}

function Dashboard({ selectedCity }) {
  const dustColor = getDustColor(selectedCity.dustLevel);

  return (
    <div className="dashboard">

      {}
      <div className="dashboard-header" style={{ borderBottom: `3px solid ${selectedCity.theme}` }}>
        <h2 className="dashboard-city-name">{selectedCity.name}</h2>
        <p className="dashboard-region">📍 {selectedCity.region}</p>
      </div>

      {}
      <div className="stats-row">
        <div className="stat-card">
          <p className="stat-label">🌡️ Temperature</p>
          <p className="stat-value" style={{ color: selectedCity.theme }}>
            {selectedCity.temp}
          </p>
        </div>

        <div className="stat-card">
          <p className="stat-label">🌪️ Dust Level</p>
          <p className="stat-value" style={{ color: dustColor }}>
            {selectedCity.dustLevel}
          </p>
          {}
          <div className="dust-bar-bg">
            <div
              className="dust-bar-fill"
              style={{
                backgroundColor: dustColor,
                width:
                  selectedCity.dustLevel === 'Low' ? '25%' :
                  selectedCity.dustLevel === 'Moderate' ? '50%' :
                  selectedCity.dustLevel === 'High' ? '75%' : '100%',
              }}
            />
          </div>
        </div>
      </div>

      {}
      <div
        className="advisory-box"
        style={{
          backgroundColor: selectedCity.theme + '22',
          border: `1px solid ${selectedCity.theme}`,
        }}
      >
        <h3 className="advisory-title" style={{ color: selectedCity.theme }}>
          ⚠️ Life Support Advisory
        </h3>
        <p className="advisory-text">{selectedCity.advisory}</p>
      </div>

    </div>
  );
}

export default Dashboard;