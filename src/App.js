import React, { useState } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

import GlobalStyle from './styles/global';
import { Container } from './styles/styles';

import location from './utils/mapIcon';

import patternBg from './images/pattern-bg.png';
import arrow from './images/icon-arrow.svg';

import api from './services/api';

function App() {
  const [ip, setIp] = useState('0.0.0.0');
  const [position, setPosition] = useState({
    latitude: -20.5329241,
    longitude: -47.3797613,
  });
  const [city, setCity] = useState('City');
  const [country, setCountry] = useState('Country');
  const [postalCode, setPostalCode] = useState('Postal Code');
  const [timezone, setTimezone] = useState('Timezone');
  const [ISP, setISP] = useState('ISP');

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.get(
      `/v1?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ip}`
    );
    const data = response.data;
    setPosition({ latitude: data.location.lat, longitude: data.location.lat });
    setCity(data.location.city);
    setCountry(data.location.country);
    setPostalCode(data.location.postalCode);
    setTimezone(data.location.timezone);
    setISP(data.isp);
    console.log({ position, city, country, postalCode, timezone, ISP });
  }

  return (
    <Container>
      <img src={patternBg} alt="" className="imgBg" />
      <div className="header">
        <form onSubmit={handleSubmit}>
          <div className="content">
            <h1>IP Address Tracker</h1>
            <div className="input-button">
              <input
                placeholder="Insira um IP"
                /* value={ip} */
                onChange={(e) => setIp(e.target.value)}
                type="text"
              />
              <button type="submit">
                <img src={arrow} alt="entrar" />
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="ip-content">
        <div className="ip-address">
          <h5>IP ADDRESS</h5>
          <strong>{ip}</strong>
        </div>

        <div className="ip-location">
          <h5>LOCATION</h5>
          <div className="ip-location-info">
            <strong>
              {city}, {country}
            </strong>
            <strong>{postalCode}</strong>
          </div>
        </div>

        <div className="ip-timezone">
          <h5>TIMEZONE</h5>
          <strong>UTC {timezone}</strong>
        </div>

        <div className="ip-isp">
          <h5>ISP</h5>
          <strong>{ISP}</strong>
        </div>
      </div>

      <Map
        center={[position.latitude, position.longitude]}
        zoom={15}
        style={{
          width: '90%',
          height: '100vh',
        }}
        className="map"
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGVybWVzLWNhcmV0dGEiLCJhIjoiY2tnNnY0cnFkMDE3dDJycW9tc2N1aGM4ZiJ9.Y9ce25Fz4n_PYJ08awiAkg`}
        />
        <Marker
          position={[position.latitude, position.longitude]}
          icon={location}
        />
      </Map>

      <GlobalStyle />
    </Container>
  );
}

export default App;
