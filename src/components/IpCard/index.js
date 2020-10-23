import React from 'react';

import { Container } from './styles';

function IpCard({ data }) {
  return (
    <Container>
      <div className="ip-content">
        <div className="ip-address">
          <h5>IP ADDRESS</h5>
          <strong>{data.ip}</strong>
        </div>

        <div className="ip-location">
          <h5>LOCATION</h5>
          <div className="ip-location-info">
            <strong>
              {data.city}, {data.country}
            </strong>
            <strong>{data.postalCode}</strong>
          </div>
        </div>

        <div className="ip-timezone">
          <h5>TIMEZONE</h5>
          <strong>UTC {data.timezone}</strong>
        </div>

        <div className="ip-isp">
          <h5>ISP</h5>
          <strong>{data.isp}</strong>
        </div>
      </div>
    </Container>
  );
}

export default IpCard;
