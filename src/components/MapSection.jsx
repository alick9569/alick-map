import { Fragment } from "react";
import { GoogleMap } from '@react-google-maps/api';

const MapSection = () => {

      const center = {
        lat: 22.352734,
        lng: 114.1277
      }
    
    return (
        <Fragment>
            <GoogleMap center={center} zoom={15} 
                mapContainerStyle={{
                    width: '100%', 
                    height: '100vh', 
                    position: 'relative', 
                    overflow: 'hidden'
                }} 
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false
                }}>
            </GoogleMap>
        </Fragment>
    );
}

export default MapSection;