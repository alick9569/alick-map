import { Fragment, useState } from "react";
import { DirectionsRenderer, GoogleMap, Marker } from '@react-google-maps/api';
import useMap from "../hooks/useMap";

const MapSection = () => {

    const center = {
        lat: 22.240454,
        lng: 114.164905
    }

    const map = useMap();
    
    const [drivingRoute, setDrivingRoute] = useState(null);

    const directionsService = new google.maps.DirectionsService()

    async function getDrivingRoute(){ // Create driving path using path state from redux
        const path = map.payload?.path
        const waypoints = path.slice(1, path.length - 1);
        const directions = await directionsService.route({
            origin: {lat: parseFloat(path[0][0]), lng: parseFloat(path[0][1])},
            destination: {lat: parseFloat(path[path.length - 1][0]), lng: parseFloat(path[path.length - 1][1])},
            waypoints: waypoints.map(waypoint => ({
                location: { lat: parseFloat(waypoint[0]), lng: parseFloat(waypoint[1]) }
            })),
            travelMode: google.maps.TravelMode.DRIVING
        })
        setDrivingRoute(directions)
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
                }}
            >
                { map.payload?.path ? map.payload?.path.map(([lat, lng], index) => (
                    <Marker onLoad={getDrivingRoute} key={index} position={{ // Show driving route when markers onload
                        lat: parseFloat(lat), lng: parseFloat(lng) 
                    }}/>
                    )) : null
                }
                {drivingRoute && <DirectionsRenderer directions={drivingRoute}/>}
            </GoogleMap>
        </Fragment>
    );
}

export default MapSection;