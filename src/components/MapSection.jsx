import { Fragment } from "react";
import { GoogleMap, Marker } from '@react-google-maps/api';
import useMap from "../hooks/useMap";

const MapSection = () => {

    const center = {
        lat: 22.352734,
        lng: 114.1277
    }

    const map = useMap();
    
    return (
        <Fragment>
            <GoogleMap center={center} zoom={13} 
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
                }}
            >
                { map.payload?.path?.map((location, index) => {console.log(location[0], location[1], index)}) }
                { map.payload?.path ? map.payload?.path.map(([lat, lng], index) => (
                    <Marker label={(index + 1).toString()} key={index} position={{
                        lat: parseFloat(lat), lng: parseFloat(lng) 
                    }}/>
                    )) : null
                } 
            </GoogleMap>
        </Fragment>
    );
}

export default MapSection;