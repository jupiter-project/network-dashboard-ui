
import { memo, useEffect, useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps'

import * as geoLocationAPI from 'services/api-geo-location'
import CardWrapper from 'parts/CardWrapper'
import { isEmpty } from 'utils/helpers/utility'

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const PeerMaps = ({
  peer
}) => {
  const [marker, setMarker] = useState({})

  useEffect(() => {
    getMaker()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [peer])

  const getMaker = async () => {
    try {
      const { latitude = 0, longitude = 0 } = await geoLocationAPI.getGeoLocation(peer.address);
      const marker = {
        markerOffset: 15,
        name: peer.platform,
        coordinates: [longitude, latitude]
      }
      setMarker(marker)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CardWrapper>
      <div>
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill='#EAEAEC'
                  stroke='#D6D6DA'
                />
              ))
            }
          </Geographies>
          {!isEmpty(marker) &&
            <Marker coordinates={marker?.coordinates}>
              <g
                fill='none'
                stroke='#2774FE'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                transform='translate(-12, -24)'
              >
                <circle cx='12' cy='10' r='3' />
                <path d='M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z' />
              </g>
              <text
                textAnchor='middle'
                y={marker?.markerOffset}
                style={{ fontFamily: 'system-ui', fill: '#2774FE' }}
              >
                {marker?.name}
              </text>
            </Marker>
          }
        </ComposableMap>
      </div>
    </CardWrapper>
  );
};

export default memo(PeerMaps);