import React, { useState } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

import GlobalStyle from './styles/global';
import { Container } from './styles/styles';

import location from './utils/mapIcon';
import 'leaflet/dist/leaflet.css';

import patternBg from './images/pattern-bg.png';
import arrow from './images/icon-arrow.svg';

import api from './services/api';
import IpCard from './components/IpCard';

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
    await api
      .get(`/v1?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ip}`)
      .then((response) => {
        const data = response.data;
        setPosition({
          latitude: data.location.lat,
          longitude: data.location.lat,
        });
        setCity(data.location.city);
        setCountry(data.location.country);
        setPostalCode(data.location.postalCode);
        setTimezone(data.location.timezone);
        setISP(data.isp);
      })
      .catch((error) => alert('Desligue o adBlocker'));
  }
  const dataComp = {
    city: city,
    ip: ip,
    country: country,
    postalCode: postalCode,
    timezone: timezone,
    isp: ISP,
  };

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

      <IpCard data={dataComp} />

      <Map
        center={[position.latitude, position.longitude]}
        zoom={15}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '80px',
          zIndex: -2,
        }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
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
